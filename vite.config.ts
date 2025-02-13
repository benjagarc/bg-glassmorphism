import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/_colors.scss" as *;
          @forward "@styles/_fonts.scss";
          @use "@styles/_media_queries.scss" as *;
          @forward "@styles/_spaces_borders.scss";
          @use "@styles/_transitions_animations.scss" as *;
          @use "@styles/_reset_css.scss" as *;
          `,
        api: "modern"
      },
    },
  },
});
