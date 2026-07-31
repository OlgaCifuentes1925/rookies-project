import { createFileRoute } from "@tanstack/react-router";
import { RookiesPage } from "@/components/rookies/RookiesPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Los Rookies — Quevedo, La Pantera, Lucho RK y Juseph" },
      {
        name: "description",
        content:
          "Quiénes son Los Rookies: Quevedo, La Pantera, Lucho RK y Juseph. Bios, temas y todo lo que han hecho juntos desde Los Brezos, Gran Canaria.",
      },
      { property: "og:title", content: "Los Rookies — Quevedo, La Pantera, Lucho RK y Juseph" },
      {
        property: "og:description",
        content:
          "El colectivo urbano canario en una web one-page: una slide por artista y la zona común de sus colaboraciones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RookiesPage,
});
