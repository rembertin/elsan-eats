import { useForm } from "react-hook-form";
import type {
  CategoryItem,
  RestaurantDetail,
  UpdateRestaurantInputs,
} from "~/features/restaurants/models";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { restaurantRepository } from "~/features/restaurants/repository/restaurant";
import { toast } from "sonner";
import { FormGroup } from "~/components/form/FormGroup";

type Props = {
  restaurant?: RestaurantDetail;
  categories: CategoryItem[] | undefined;
};

export function EditRestaurantForm({ restaurant, categories }: Props) {
  const form = useForm<UpdateRestaurantInputs>({
    defaultValues: {
      name: restaurant?.name,
      categoryId: restaurant?.categoryId,
    },
  });

  async function onSubmit(data: UpdateRestaurantInputs) {
    if (!restaurant) {
      return;
    }

    await restaurantRepository.update(restaurant.id, data);

    toast.success(`"${restaurant.name}" mis à jour.`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormGroup label="* Nom">
              <Input {...field} />
            </FormGroup>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormGroup label="* Catégorie" wrapInFormControl={false}>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choisir une catégorie" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((category) => (
                    <SelectItem
                      value={category.id.toString()}
                      key={category.id}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormGroup>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Envoyer
          </Button>
        </div>
      </form>
    </Form>
  );
}
