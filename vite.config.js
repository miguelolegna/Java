import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./", // 🔥 Agora o root é a raiz, não `public/`
  server: {
    port: 5173,
    strictPort: true,
  },
  base: "./", // 🔥 Garante que os caminhos dos arquivos estão corretos
});
