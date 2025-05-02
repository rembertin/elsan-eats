import type { CategoryItem } from "~/features/restaurants/models";
import { get } from "~/api/client/api-client";

export interface CategoryRepository {
  list(): Promise<CategoryItem[]>;
}

class ApiCategoryRepository implements CategoryRepository {
  list(): Promise<CategoryItem[]> {
    return get<CategoryItem[]>("/categories");
  }
}

export class MockCategoryRepository implements CategoryRepository {
  list(): Promise<CategoryItem[]> {
    return Promise.resolve([
      {
        id: 1,
        name: "Italien",
      },
      {
        id: 2,
        name: "Sandwich",
      },
      {
        id: 3,
        name: "Tartes",
      },
      {
        id: 4,
        name: "Indonésien",
      },
    ]);
  }
}

export const categoryRepository: CategoryRepository =
  new ApiCategoryRepository();
