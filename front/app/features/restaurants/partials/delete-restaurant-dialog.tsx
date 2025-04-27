import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import type { RestaurantItem } from "~/features/restaurants/models";

export function DeleteRestaurantDialog({
  open,
  restaurantItem,
}: {
  open: boolean;
  restaurantItem: RestaurantItem;
  onClose: () => void;
}) {
  fun;

  return (
    <Dialog open={open} onOpenChange={(open) => open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Supprimer le restaurant</DialogTitle>
          <DialogDescription>
            Voulez-vous vraiment supprimer le restaurant "{restaurantItem.name}"
            et tous ses plats ?
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
