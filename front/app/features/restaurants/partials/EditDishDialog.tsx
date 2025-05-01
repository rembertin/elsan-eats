import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import type {
  DishDetail,
  UpdateDishInputs,
} from "~/features/restaurants/models";
import { dishRepository } from "~/features/restaurants/repository/dish";
import { toast } from "sonner";
import { EditDishForm } from "~/features/restaurants/partials/EditDishForm";
import { useEffect } from "react";

type Props = {
  restaurantId: number;
  dish: DishDetail;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EditDishDialog({
  restaurantId,
  dish,
  open,
  onOpenChange,
}: Props) {
  const form = useForm<UpdateDishInputs>();

  function resetForm() {
    form.reset({ ...dish });
  }

  useEffect(() => {
    resetForm();
  }, [dish]);

  async function onSubmit(data: UpdateDishInputs) {
    await dishRepository.update(restaurantId, dish.id, data);

    toast.success(`Plat "${data.name}" mis à jour.`);
    onOpenChange(false);
    resetForm();
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      resetForm();
    }

    onOpenChange(open);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier</DialogTitle>
        </DialogHeader>
        <EditDishForm form={form} />
        <DialogFooter>
          <Button variant="default" onClick={form.handleSubmit(onSubmit)}>
            <FontAwesomeIcon icon={faCheckCircle} />
            Modifier le plat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
