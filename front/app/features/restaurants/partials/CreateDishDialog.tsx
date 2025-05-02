import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "~/components/ui/button";
import { CreateDishForm } from "~/features/restaurants/partials/CreateDishForm";
import { useForm } from "react-hook-form";
import type { CreateDishInputs } from "~/features/restaurants/models";
import { dishRepository } from "~/features/restaurants/repository/dish";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDishSchema } from "~/features/restaurants/validation/dish";

type Props = {
  restaurantId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreateDishDialog({ restaurantId, open, onOpenChange }: Props) {
  const form = useForm<CreateDishInputs>({
    resolver: yupResolver(createDishSchema),
  });
  const queryClient = useQueryClient();

  async function onSubmit(data: CreateDishInputs) {
    await dishRepository.create(restaurantId, data);

    toast.success(`Plat "${data.name}" créé.`);
    onOpenChange(false);
    form.reset();

    await queryClient.invalidateQueries({
      queryKey: [`restaurant.${restaurantId}`],
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un plat</DialogTitle>
        </DialogHeader>
        <CreateDishForm form={form} />
        <DialogFooter>
          <Button variant="default" onClick={form.handleSubmit(onSubmit)}>
            <FontAwesomeIcon icon={faCheckCircle} />
            Créer le plat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
