import { Auth0UserInterface } from 'src/auth/auth.guard';
import { Category } from './category.entity';
import { CreateCategoryInput, UpdateCategoryInput } from './input';
export declare class CategoryService {
    private readonly categoryRepo;
    private readonly userRepo;
    createCategory(currentUser: Auth0UserInterface, createCategoryInput: CreateCategoryInput): Promise<Category>;
    updateCategory(currentUser: Auth0UserInterface, categoryId: number, updateCategoryInput: UpdateCategoryInput): Promise<Category>;
    deleteCategory(currentUser: Auth0UserInterface, categoryId: number): Promise<boolean>;
    getCategories(currentUser: Auth0UserInterface): Promise<Category[]>;
    getCategory(currentUser: Auth0UserInterface, categoryId: number): Promise<Category>;
}
