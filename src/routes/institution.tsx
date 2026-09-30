import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/institution")({ component: InstitutionLayout });

function InstitutionLayout() {
  return <Outlet />;
}
