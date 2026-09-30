import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fleet")({ component: FleetLayout });

function FleetLayout() {
  return <Outlet />;
}
