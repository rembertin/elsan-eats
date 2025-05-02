import { useQuery } from "@tanstack/react-query";
import { restaurantRepository } from "~/features/restaurants/repository/restaurant";
import type { RestaurantDetail } from "~/features/restaurants/models";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { RestaurantDishes } from "~/features/restaurants/partials/RestaurantDishes";
import { useCategories } from "~/features/restaurants/hooks/category";
import { EditRestaurantForm } from "~/features/restaurants/partials/EditRestaurantForm";
import { Heading1 } from "~/components/headings/Heading1";
import { Container } from "~/components/Container";

type PropsType = {
  id: number;
};
export function EditRestaurant({ id }: PropsType) {
  const { data: restaurant } = useQuery<RestaurantDetail>({
    queryKey: [`restaurant.${id}`],
    queryFn: () => restaurantRepository.get(id),
  });

  const { categories } = useCategories();

  return (
    <Container>
      {restaurant && (
        <>
          <Heading1>Modifier "{restaurant.name}"</Heading1>

          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">Général</TabsTrigger>
              <TabsTrigger value="dishes">Plats</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <EditRestaurantForm
                restaurant={restaurant}
                categories={categories}
              />
            </TabsContent>
            <TabsContent value="dishes">
              <RestaurantDishes
                restaurantId={restaurant.id}
                dishes={restaurant.dishes}
              />
            </TabsContent>
          </Tabs>
        </>
      )}
    </Container>
  );
}
