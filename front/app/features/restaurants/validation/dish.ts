import { number, object, string } from "yup";

export const createDishSchema = object()
  .shape({
    name: string().required("Le nom du plat est obligatoire"),
    description: string().required("La description est obligatoire"),
    price: number()
      .positive("Le prix doit être supérieur à 0")
      .required("Le prix est obligatoire"),
  })
  .required();

export const updateDishSchema = object()
  .shape({
    name: string().required("Le nom du plat est obligatoire"),
    description: string().required("La description est obligatoire"),
    price: number()
      .positive("Le prix doit être supérieur à 0")
      .required("Le prix est obligatoire"),
  })
  .required();
