// vite.config.js
import { defineConfig } from "file:///home/samuele/repos/kit/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.11_terser@5.31.0/node_modules/vite/dist/node/index.js";
import dns from "dns";
import react from "file:///home/samuele/repos/kit/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.11_@types+node@20.12.11_terser@5.31.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { nodePolyfills } from "file:///home/samuele/repos/kit/node_modules/.pnpm/vite-plugin-node-polyfills@0.21.0_rollup@4.17.2_vite@5.2.11_@types+node@20.12.11_terser@5.31.0_/node_modules/vite-plugin-node-polyfills/dist/index.js";
import viteTsconfigPaths from "file:///home/samuele/repos/kit/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.11_@types+node@20.12.11_terser@5.31.0_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import svgrPlugin from "file:///home/samuele/repos/kit/node_modules/.pnpm/vite-plugin-svgr@4.2.0_rollup@4.17.2_typescript@5.4.5_vite@5.2.11_@types+node@20.12.11_terser@5.31.0_/node_modules/vite-plugin-svgr/dist/index.js";
dns.setDefaultResultOrder("verbatim");
var vite_config_default = defineConfig(() => {
  return {
    plugins: [
      react(),
      nodePolyfills({
        include: ["buffer"],
        globals: {
          Buffer: true
        }
      }),
      viteTsconfigPaths(),
      svgrPlugin()
    ],
    define: {
      "process.env.PACKAGE_VERSION": JSON.stringify(process.env.npm_package_version)
    },
    resolve: {
      dedupe: ["wagmi", "viem"]
    },
    build: {
      minify: false
    },
    server: {
      minify: false,
      port: 4444,
      fs: {
        // Allow serving files from one level up to the project root
        allow: [".."]
      }
    },
    base: ""
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zYW11ZWxlL3JlcG9zL2tpdC9leGFtcGxlcy9yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc2FtdWVsZS9yZXBvcy9raXQvZXhhbXBsZXMvcmVhY3Qvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc2FtdWVsZS9yZXBvcy9raXQvZXhhbXBsZXMvcmVhY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGRucyBmcm9tICdkbnMnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnXG5pbXBvcnQgdml0ZVRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBzdmdyUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXG5cbmRucy5zZXREZWZhdWx0UmVzdWx0T3JkZXIoJ3ZlcmJhdGltJylcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgbm9kZVBvbHlmaWxscyh7XG4gICAgICAgIGluY2x1ZGU6IFsnYnVmZmVyJ10sXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICBCdWZmZXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICB2aXRlVHNjb25maWdQYXRocygpLFxuICAgICAgc3ZnclBsdWdpbigpXG4gICAgXSxcbiAgICBkZWZpbmU6IHtcbiAgICAgICdwcm9jZXNzLmVudi5QQUNLQUdFX1ZFUlNJT04nOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uKVxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgZGVkdXBlOiBbJ3dhZ21pJywgJ3ZpZW0nXVxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG1pbmlmeTogZmFsc2VcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgbWluaWZ5OiBmYWxzZSxcbiAgICAgIHBvcnQ6IDQ0NDQsXG4gICAgICBmczoge1xuICAgICAgICAvLyBBbGxvdyBzZXJ2aW5nIGZpbGVzIGZyb20gb25lIGxldmVsIHVwIHRvIHRoZSBwcm9qZWN0IHJvb3RcbiAgICAgICAgYWxsb3c6IFsnLi4nXVxuICAgICAgfVxuICAgIH0sXG4gICAgYmFzZTogJydcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1MsU0FBUyxvQkFBb0I7QUFDalUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLGdCQUFnQjtBQUV2QixJQUFJLHNCQUFzQixVQUFVO0FBRXBDLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQ2hDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxRQUNaLFNBQVMsQ0FBQyxRQUFRO0FBQUEsUUFDbEIsU0FBUztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELGtCQUFrQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTiwrQkFBK0IsS0FBSyxVQUFVLFFBQVEsSUFBSSxtQkFBbUI7QUFBQSxJQUMvRTtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsUUFBUSxDQUFDLFNBQVMsTUFBTTtBQUFBLElBQzFCO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBO0FBQUEsUUFFRixPQUFPLENBQUMsSUFBSTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
