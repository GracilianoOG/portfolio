import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
      }),
    ],
    define: {
      "process.env.FORMSUBMIT_KEY": JSON.stringify(env.FORMSUBMIT_KEY),
    },
  };
});
