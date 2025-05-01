import type {
  CreateDishInputs,
  DishDetail,
  DishItem,
  UpdateDishInputs,
} from "../models";
import { undefined } from "zod";

export interface DishRepository {
  get(restaurantId: number, dishId: number): Promise<DishDetail>;
  create(restaurantId: number, data: CreateDishInputs): Promise<void>;
  update(restaurantId: number, id: number, data: UpdateDishInputs): any;
  delete(restaurantId: number, dishId: number): Promise<void>;
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

export const dishRepository: DishRepository = new MockDishRepository();
