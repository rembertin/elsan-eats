import { useState } from "react";

export function useDeleteItem<T>({
  deleteFn,
}: {
  deleteFn: (item: T) => Promise<void>;
}) {
  const [itemToDelete, setItemToDelete] = useState<T | undefined>();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  function handleClickDelete(item: T) {
    setItemToDelete(item);
    setDeleteDialogOpen(true);
  }

  async function submitDelete() {
    if (!itemToDelete) {
      return;
    }

    await deleteFn(itemToDelete);

    setItemToDelete(undefined);
    setDeleteDialogOpen(false);
  }

  return {
    itemToDelete,
    deleteDialogOpen,
    setDeleteDialogOpen,
    handleClickDelete,
    submitDelete,
  };
}
