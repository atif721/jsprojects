import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/ReactProjects/001TodoApp/", // <-- important
  plugins: [react()],
});
