import type { UseFormReturn } from "react-hook-form";
import type { CreateDishInputs } from "~/features/restaurants/models";
import { Form, FormField } from "~/components/ui/form";
import { FormGroup } from "~/components/form/FormGroup";
import { Input } from "~/components/ui/input";

type Props = {
  form: UseFormReturn<CreateDishInputs>;
};

export function CreateDishForm({ form }: Props) {
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 w-full"></form>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormGroup label="Nom">
            <Input {...field} />
          </FormGroup>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormGroup label="Description">
            <Input {...field} />
          </FormGroup>
        )}
      />
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormGroup label="Prix (€)">
            <Input {...field} type="number" step={0.5} />
          </FormGroup>
        )}
      />
    </Form>
  );
}
