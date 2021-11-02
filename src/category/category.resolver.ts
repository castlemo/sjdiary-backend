import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import {
  Auth0UserInterface,
  CurrentUser,
  GqlAuthGuard,
} from '../auth/auth.guard';

import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryInput, UpdateCategoryInput } from './input';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => Category)
  @UseGuards(GqlAuthGuard)
  async getCategory(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('categoryId') categoryId: number,
  ): Promise<Category> {
    return await this.categoryService.getCategory(currentUser, categoryId);
  }

  @Query(() => [Category])
  @UseGuards(GqlAuthGuard)
  async getCategories(
    @CurrentUser() currentUser: Auth0UserInterface,
  ): Promise<Category[]> {
    return await this.categoryService.getCategories(currentUser);
  }

  @Mutation(() => Category)
  @UseGuards(GqlAuthGuard)
  async createCategory(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('input') createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return await this.categoryService.createCategory(
      currentUser,
      createCategoryInput,
    );
  }

  @Mutation(() => Category)
  @UseGuards(GqlAuthGuard)
  async updateCategory(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('categoryId') categoryId: number,
    @Args('input') updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    return await this.categoryService.updateCategory(
      currentUser,
      categoryId,
      updateCategoryInput,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteCategory(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('categoryId', { type: () => Int }) categoryId: number,
  ): Promise<boolean> {
    return await this.categoryService.deleteCategory(currentUser, categoryId);
  }
}
