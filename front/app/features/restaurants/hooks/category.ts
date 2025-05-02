import { useQuery } from "@tanstack/react-query";
import type { CategoryItem } from "~/features/restaurants/models";
import { categoryRepository } from "~/features/restaurants/repository/category";

export function useCategories() {
  const { data: categories } = useQuery<CategoryItem[]>({
    queryKey: ["categories"],
    queryFn: () => categoryRepository.list(),
  });

  return {
    categories,
  };
}
