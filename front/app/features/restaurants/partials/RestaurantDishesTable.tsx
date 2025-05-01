import { TableWithBorders } from "~/components/table/TableWithBorders";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { DishItem } from "~/features/restaurants/models";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatPrice } from "~/utils/format";

type PropsType = {
  dishes: DishItem[];
  onDeleteDish: (dish: DishItem) => void;
  onEditDish: (dish: DishItem) => void;
};

export function RestaurantDishesTable({
  dishes,
  onDeleteDish,
  onEditDish,
}: PropsType) {
  return (
    <TableWithBorders>
      <TableHeader>
        <TableRow>
          <TableHead>Photo</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Prix</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dishes.map((dish: DishItem) => (
          <TableRow key={dish.id}>
            <TableCell>
              <img src={dish.photoPath} alt="" />
            </TableCell>
            <TableCell>{dish.name}</TableCell>
            <TableCell>{dish.description}</TableCell>
            <TableCell>{formatPrice(dish.price)}</TableCell>
            <TableCell align="right">
              <Button
                size="icon"
                variant="secondary"
                onClick={() => onEditDish(dish)}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => onDeleteDish(dish)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableWithBorders>
  );
}
