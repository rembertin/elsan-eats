import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { RestaurantItem } from "~/features/restaurants/models";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TableWithBorders } from "~/components/table/table-with-borders";

export function RestaurantsTable({
  restaurants,
  onClickDeleteRestaurant,
}: {
  restaurants: RestaurantItem[];
  onClickDeleteRestaurant: (restaurant: RestaurantItem) => void;
}) {
  return (
    <TableWithBorders>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Catégorie</TableHead>
          <TableHead>Nombre de plats</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {restaurants.map((restaurant: RestaurantItem) => (
          <TableRow key={restaurant.id}>
            <TableCell>{restaurant.name}</TableCell>
            <TableCell>{restaurant.category}</TableCell>
            <TableCell>{restaurant.dishesCount}</TableCell>
            <TableCell>
              <Button size="icon" variant="secondary" onClick={() => {}}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => onClickDeleteRestaurant(restaurant)}
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
