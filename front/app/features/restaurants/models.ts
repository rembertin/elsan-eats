export interface RestaurantItem {
  id: number;
  name: string;
  category: string;
  dishesCount: number;
}

export interface RestaurantDetail {
  id: number;
  name: string;
  categoryId: number;
  dishes: DishItem[];
}

export type CreateRestaurantInputs = {
  name: string;
  categoryId: number;
};

export type CreateRestaurantResponse = {
  id: number;
};

export type UpdateRestaurantInputs = {
  name: string;
  categoryId: number;
};

export interface CategoryItem {
  id: number;
  name: string;
}

export interface DishItem {
  id: number;
  name: string;
  photoPath: string;
  description: string;
  price: number;
}

export interface DishDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  photoPath: string;
}

export interface CreateDishInputs {
  name: string;
  description: string;
  price: number;
  photoPath: string;
}

export interface UpdateDishInputs {
  name: string;
  description: string;
  price: number;
  photoPath: string;
}
