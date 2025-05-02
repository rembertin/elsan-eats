import type { ReactNode } from "react";

export function Heading1({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl mb-5">{children}</h1>;
}
