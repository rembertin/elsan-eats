import { Button } from "~/components/ui/button";
import { Link, Outlet } from "react-router";
import { Toaster } from "~/components/ui/sonner";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="text-lg font-semibold mb-4">Elsan Eats</h2>
        <nav className="space-y-2">
          <Button
            asChild={true}
            variant="ghost"
            className="w-full justify-start"
          >
            <Link to="/">Restaurants</Link>
          </Button>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col p-6 bg-white">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
