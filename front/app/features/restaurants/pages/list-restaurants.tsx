import { useQuery } from "@tanstack/react-query";
import { listRestaurants } from "~/features/restaurants/repository";
import type { RestaurantItem } from "~/features/restaurants/models";
import { RestaurantsTable } from "~/features/restaurants/partials/restaurants-table";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DeleteRestaurantDialog } from "~/features/restaurants/partials/delete-restaurant-dialog";
import { useState } from "react";

export function ListRestaurants() {
  const { data: restaurants } = useQuery<RestaurantItem[]>({
    queryKey: ["restaurants"],
    queryFn: () => listRestaurants(),
  });

  const {
    restaurantToDelete,
    deleteRestaurantDialogOpen,
    handleClickDeleteRestaurant,
  } = useDeleteRestaurant();

  return (
    <>
      <h1 className="text-2xl mb-5">Liste des restaurants</h1>

      <div className="flex justify-end mb-4">
        <Button variant="default">
          <FontAwesomeIcon icon={faPlus} />
          Ajouter un restaurant
        </Button>
      </div>
      {!restaurants ? (
        <p>Chargement...</p>
      ) : restaurants.length > 0 ? (
        <RestaurantsTable
          restaurants={restaurants}
          onClickDeleteRestaurant={handleClickDeleteRestaurant}
        />
      ) : (
        <p>No restaurants found</p>
      )}
      {restaurantToDelete && (
        <DeleteRestaurantDialog
          open={deleteRestaurantDialogOpen}
          restaurantItem={restaurantToDelete}
        />
      )}
    </>
  );
}

function useDeleteRestaurant() {
  const [restaurantToDelete, setRestaurantToDelete] = useState<
    RestaurantItem | undefined
  >();
  const [deleteRestaurantDialogOpen, setDeleteRestaurantDialogOpen] =
    useState<boolean>(false);

  const handleClickDeleteRestaurant = (restaurant: RestaurantItem) => {
    setRestaurantToDelete(restaurant);
    setDeleteRestaurantDialogOpen(true);
  };

  return {
    restaurantToDelete,
    deleteRestaurantDialogOpen,
    handleClickDeleteRestaurant,
  };
}
