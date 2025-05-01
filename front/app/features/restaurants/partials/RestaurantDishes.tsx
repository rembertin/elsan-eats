import { RestaurantDishesTable } from "./RestaurantDishesTable";
import type { DishDetail, DishItem } from "../models";
import { dishRepository } from "~/features/restaurants/repository/dish";
import { CreateDishDialog } from "~/features/restaurants/partials/CreateDishDialog";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "~/components/ui/button";
import { EditDishDialog } from "~/features/restaurants/partials/EditDishDialog";
import { DeleteDialog } from "~/components/dialog/DeleteDialog";
import { useDeleteItem } from "~/hooks/delete";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type PropsType = {
  restaurantId: number;
  dishes: DishItem[];
};
export function RestaurantDishes({ restaurantId, dishes }: PropsType) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [editedDish, setEditedDish] = useState<DishDetail | undefined>();

  const queryClient = useQueryClient();

  const {
    deleteDialogOpen,
    setDeleteDialogOpen,
    handleClickDelete,
    itemToDelete: dishToDelete,
    submitDelete: submitDelete,
  } = useDeleteItem<DishItem>({
    async deleteFn(dishItem) {
      await dishRepository.delete(restaurantId, dishItem.id);
      await queryClient.invalidateQueries({
        queryKey: [`restaurant.${restaurantId}`],
      });

      toast.success(`"${dishItem.name}" supprimé.`);
    },
  });

  async function handleEditDish(dishItem: DishItem) {
    const dish = await dishRepository.get(restaurantId, dishItem.id);

    setEditedDish(dish);
    setIsEditDialogOpen(true);
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsCreateDialogOpen(true)} variant="default">
          <FontAwesomeIcon icon={faPlus} />
          Ajouter un plat
        </Button>
      </div>
      {dishes && (
        <RestaurantDishesTable
          dishes={dishes}
          onEditDish={(dish) => handleEditDish(dish)}
          onDeleteDish={(dish) => handleClickDelete(dish)}
        />
      )}
      <CreateDishDialog
        restaurantId={restaurantId}
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
      {editedDish && (
        <EditDishDialog
          dish={editedDish}
          restaurantId={restaurantId}
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
        />
      )}
      {dishToDelete && (
        <DeleteDialog
          title="Supprimer le plat"
          confirmationMessage={`Voulez-vous vraiment supprimer le plat ${dishToDelete.name} ?`}
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          onSubmit={submitDelete}
        />
      )}
    </>
  );
}
