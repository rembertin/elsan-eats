import { Heading1 } from "~/components/headings/Heading1";
import { CreateRestaurantForm } from "~/features/restaurants/partials/CreateRestaurantForm";
import { useCategories } from "~/features/restaurants/hooks/category";
import { Container } from "~/components/Container";

export function CreateRestaurant() {
  const { categories } = useCategories();

  return (
    <Container>
      <Heading1>Créer un restaurant</Heading1>
      <CreateRestaurantForm categories={categories} />
    </Container>
  );
}
