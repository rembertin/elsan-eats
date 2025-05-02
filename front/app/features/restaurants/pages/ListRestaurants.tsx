import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { RestaurantItem } from "~/features/restaurants/models";
import { RestaurantsTable } from "~/features/restaurants/partials/RestaurantsTable";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Heading1 } from "~/components/headings/Heading1";
import { restaurantRepository } from "~/features/restaurants/repository/restaurant";
import { DeleteDialog } from "~/components/dialog/DeleteDialog";
import { useDeleteItem } from "~/hooks/delete";
import { Container } from "~/components/Container";

export function ListRestaurants() {
  const queryClient = useQueryClient();
  const { data: restaurants } = useQuery<RestaurantItem[]>({
    queryKey: ["restaurants"],
    queryFn: () => restaurantRepository.list(),
  });

  const {
    itemToDelete: restaurantToDelete,
    deleteDialogOpen,
    setDeleteDialogOpen,
    handleClickDelete,
    submitDelete,
  } = useDeleteItem<RestaurantItem>({
    async deleteFn(restaurantItem) {
      await restaurantRepository.delete(restaurantItem.id);
      await queryClient.invalidateQueries({ queryKey: ["restaurants"] });
    },
  });

  const createRestaurantButton = (
    <Button variant="default" asChild={true}>
      <Link to="/restaurants/create">
        <FontAwesomeIcon icon={faPlus} />
        Ajouter un restaurant
      </Link>
    </Button>
  );

  return (
    <Container>
      <Heading1>Liste des restaurants</Heading1>

      <div className="flex justify-end mb-4"></div>
      {!restaurants ? (
        <p>Chargement...</p>
      ) : restaurants.length > 0 ? (
        <>
          <div className="flex justify-end mb-4">{createRestaurantButton}</div>
          <RestaurantsTable
            restaurants={restaurants}
            onClickDeleteRestaurant={handleClickDelete}
          />
        </>
      ) : (
        <p>
          Aucun restaurant pour le moment.
          <br className="mb-4" />
          {createRestaurantButton}
        </p>
      )}
      {restaurantToDelete && (
        <DeleteDialog
          title="Supprimer le restaurant"
          confirmationMessage={`Voulez-vous vraiment supprimer le restaurant ${restaurantToDelete.name} et tous ses plats ?`}
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          onSubmit={submitDelete}
        />
      )}
    </Container>
  );
}
