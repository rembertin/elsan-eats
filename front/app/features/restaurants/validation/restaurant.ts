import { number, object, string } from "yup";

export const createRestaurantSchema = object()
  .shape({
    name: string().required("Le nom du restaurant est obligatoire"),
    categoryId: number().required("La catégorie est obligatoire"),
  })
  .required();

export const updateRestaurantSchema = object()
  .shape({
    name: string().required("Le nom du restaurant est obligatoire"),
    categoryId: number().required("La catégorie est obligatoire"),
  })
  .required();
