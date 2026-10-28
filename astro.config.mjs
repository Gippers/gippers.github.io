// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // replace with this site's URL
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), icon()],
})