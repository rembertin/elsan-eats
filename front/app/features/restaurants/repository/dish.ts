import { del, get, post, put } from "~/api/client/api-client";
import type { CreateDishInputs, DishDetail, UpdateDishInputs } from "../models";

export interface DishRepository {
  get(restaurantId: number, dishId: number): Promise<DishDetail>;
  create(restaurantId: number, data: CreateDishInputs): Promise<void>;
  update(
    restaurantId: number,
    id: number,
    data: UpdateDishInputs,
  ): Promise<void>;
  delete(restaurantId: number, dishId: number): Promise<void>;
}

class ApiDishRepository implements DishRepository {
  create(restaurantId: number, data: CreateDishInputs): Promise<void> {
    return post(`/restaurants/${restaurantId}/dishes`, data);
  }

  delete(restaurantId: number, dishId: number): Promise<void> {
    return del(`/restaurants/${restaurantId}/dishes/${dishId}`);
  }

  get(restaurantId: number, dishId: number): Promise<DishDetail> {
    return get(`/restaurants/${restaurantId}/dishes/${dishId}`);
  }

  update(
    restaurantId: number,
    dishId: number,
    data: UpdateDishInputs,
  ): Promise<void> {
    return put(`/restaurants/${restaurantId}/dishes/${dishId}`, data);
  }
}

class MockDishRepository implements DishRepository {
  get(restaurantId: number, dishId: number): Promise<DishDetail> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            id: 1,
            name: "Poulet Croustillant",
            photoPath: "/fake/dishes/poulet-croustillant.jpg",
            description:
              "Poulet croustillant, riz jasmin, sriracha, mayo, citron vert, oignon nouveau",
            price: 11.5,
          }),
        200,
      );
    });
  }

  update(
    restaurantId: number,
    id: number,
    data: UpdateDishInputs,
  ): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  }

  create(restaurantId: number, data: CreateDishInputs): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  }

  delete(restaurantId: number, dishId: number): Promise<void> {
    return Promise.resolve();
  }
}

export const dishRepository: DishRepository = new ApiDishRepository();
