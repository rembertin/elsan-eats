import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

export function DeleteDialog({
  title,
  confirmationMessage,
  open,
  onOpenChange,
  onSubmit,
}: {
  title: string;
  confirmationMessage: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{confirmationMessage}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button variant="destructive" onClick={onSubmit}>
            <FontAwesomeIcon icon={faTrash} />
            Supprimer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
