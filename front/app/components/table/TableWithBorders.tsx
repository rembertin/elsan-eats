import type { ReactNode } from "react";
import { Table } from "~/components/ui/table";

export function TableWithBorders({ children }: { children: ReactNode }) {
  return (
    <div className="border rounded-sm">
      <Table>{children}</Table>
    </div>
  );
}
