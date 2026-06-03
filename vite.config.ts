import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Redirect TanStack Start's bundled server entry to src/server.ts for the SSR error wrapper.
const isVercelBuild = process.env.VERCEL === "1";

export default defineConfig({
  plugins: [
    ...(isVercelBuild ? [] : [cloudflare({ viteEnvironment: { name: "ssr" } })]),
    tanstackStart({
      server: { entry: "server" },
    }),
    ...(isVercelBuild ? [nitro()] : []),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
