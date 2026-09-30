import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bots")({ component: BotsLayout });

function BotsLayout() {
  return <Outlet />;
}
