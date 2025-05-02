import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

type Props = {
  children: React.ReactNode;
  label?: string;
  withError?: boolean;
  wrapInFormControl?: boolean;
};

export function FormGroup({
  label,
  children,
  withError = true,
  wrapInFormControl = true,
}: Props) {
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      {wrapInFormControl ? <FormControl>{children}</FormControl> : children}
      {withError && <FormMessage />}
    </FormItem>
  );
}
