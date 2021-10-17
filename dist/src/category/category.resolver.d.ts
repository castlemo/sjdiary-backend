import { Auth0UserInterface } from '../auth/auth.guard';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryInput, UpdateCategoryInput } from './input';
export declare class CategoryResolver {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategory(currentUser: Auth0UserInterface, categoryId: number): Promise<Category>;
    getCategories(currentUser: Auth0UserInterface): Promise<Category[]>;
    createCategory(currentUser: Auth0UserInterface, createCategoryInput: CreateCategoryInput): Promise<Category>;
    updateCategory(currentUser: Auth0UserInterface, categoryId: number, updateCategoryInput: UpdateCategoryInput): Promise<Category>;
    deleteCategory(currentUser: Auth0UserInterface, categoryId: number): Promise<boolean>;
}
