import { useForm } from "react-hook-form";
import type {
  CategoryItem,
  CreateRestaurantInputs,
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
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRestaurantSchema } from "~/features/restaurants/validation/restaurant";

type Props = {
  categories: CategoryItem[] | undefined;
};

export function CreateRestaurantForm({ categories }: Props) {
  const form = useForm<CreateRestaurantInputs>({
    resolver: yupResolver(createRestaurantSchema),
  });

  const navigate = useNavigate();

  async function onSubmit(data: CreateRestaurantInputs) {
    const { id } = await restaurantRepository.create(data);

    toast.success(`"${data.name} créé."`);
    navigate(`/restaurants/${id}/edit`);
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
            <FormItem>
              <FormLabel>* Nom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Catégorie</FormLabel>
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
              <FormMessage />
            </FormItem>
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
