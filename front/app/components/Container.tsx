import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="w-2/3">{children}</div>;
}
