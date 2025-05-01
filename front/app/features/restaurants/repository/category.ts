import type { CategoryItem } from "~/features/restaurants/models";

export interface CategoryRepository {
  list(): Promise<CategoryItem[]>;
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

const mockCategoryRepository = new MockCategoryRepository();

export { mockCategoryRepository as categoryRepository };
