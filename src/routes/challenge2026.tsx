import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/challenge2026")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
