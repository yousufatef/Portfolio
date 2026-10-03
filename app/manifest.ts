import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Youssef Atef Portfolio",
    short_name: "Youssef Atef",
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
