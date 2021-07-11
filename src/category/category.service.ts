import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-express';
import { Auth0UserInterface } from 'src/auth/auth.guard';
import { Repository } from 'typeorm';

import { User } from '../user/entity/user.entity';

import { Category } from './entity/category.entity';
import { CreateCategoryInput, UpdateCategoryInput } from './input';

@Injectable()
export class CategoryService {
  @InjectRepository(Category)
  private readonly categoryRepo: Repository<Category>;
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;

  async createCategory(
    currentUser: Auth0UserInterface,
    createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });

    if (!_user) {
      throw new ApolloError('[createCategory] this user Not Exist');
    }

    const _category = this.categoryRepo.create({
      name: createCategoryInput.name,
      color: createCategoryInput.color,
      User: _user,
    });
    const category = await this.categoryRepo.save(_category);

    return category;
  }

  async updateCategory(
    currentUser: Auth0UserInterface,
    categoryId: number,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });

    if (!_user) {
      throw new ApolloError('[updateCategory] this user Not Exist');
    }

    const _category = await this.categoryRepo.findOne({
      id: categoryId,
      User: _user,
    });

    if (!_category) {
      throw new ApolloError('[updateCategory] this category Not Exist');
    }

    for (const key in updateCategoryInput) {
      _category[key] = updateCategoryInput[key];
    }

    const category = await this.categoryRepo.save(_category);

    return category;
  }

  async deleteCategory(
    currentUser: Auth0UserInterface,
    categoryId: number,
  ): Promise<boolean> {
    const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });

    if (!_user) {
      throw new ApolloError('[deleteCategory] this user Not Exist');
    }

    const _category = await this.categoryRepo.findOne({
      id: categoryId,
      User: _user,
    });

    if (!_category) {
      throw new ApolloError('[deleteCategory] this category Not Exist');
    }

    await this.categoryRepo.softDelete(_category.id);

    return true;
  }

  async getCategories(currentUser: Auth0UserInterface): Promise<Category[]> {
    const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });

    if (!_user) {
      throw new ApolloError('[getCategories] this user Not Exist');
    }

    const categories = await this.categoryRepo.find({
      User: _user,
    });

    return categories;
  }

  async getCategory(
    currentUser: Auth0UserInterface,
    categoryId: number,
  ): Promise<Category> {
    const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });

    if (!_user) {
      throw new ApolloError('[getCategory] this user Not Exist');
    }

    const category = await this.categoryRepo.findOne({
      id: categoryId,
      User: _user,
    });

    if (!category) {
      throw new ApolloError('[getCategory] this category Not Exist');
    }

    return category;
  }
}
