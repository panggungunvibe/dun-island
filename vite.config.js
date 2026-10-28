import { defineConfig } from "vite";
export default defineConfig({
  base: "/dun-island/",
  server: { watch: { ignored: ["**/analysis/**"] } },
  build: { rollupOptions: { output: { manualChunks: { three: ["three"] } } } },
});
