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

type Props = {
  restaurantId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreateDishDialog({ restaurantId, open, onOpenChange }: Props) {
  const form = useForm<CreateDishInputs>();

  async function onSubmit(data: CreateDishInputs) {
    await dishRepository.create(restaurantId, data);

    toast.success(`Plat "${data.name}" créé.`);
    onOpenChange(false);
    form.reset();
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
