import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     target: "http://127.0.0.1:8000",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //     headers: {
    //       "Access-Control-Request-Headers": "content-type",
    //     },
    //   },
    // },
    open: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: [".js", ".json", ".ts", ".tsx", ".jsx"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  build: {
    /*指定构建输出的目录 */
    outDir: "build",
    /*构建之前是否清空输出目录 */
    emptyOutDir: true,
    /*是否生成源映射文件 */
    sourcemap: true,
    /*指定构建输出的目录 */
    manifest: true,
  },
  plugins: [react()],
});
