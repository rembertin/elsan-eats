import { Heading1 } from "~/components/headings/Heading1";
import { CreateRestaurantForm } from "~/features/restaurants/partials/CreateRestaurantForm";
import { useCategories } from "~/features/restaurants/hooks/category";

export function CreateRestaurant() {
  const { categories } = useCategories();

  return (
    <>
      <Heading1>Créer un restaurant</Heading1>
      <CreateRestaurantForm categories={categories} />
    </>
  );
}
