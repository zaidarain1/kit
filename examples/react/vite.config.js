import { defineConfig } from 'vite';
import dns from 'dns'
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr'

dns.setDefaultResultOrder('verbatim')

export default defineConfig(() => {
  return {
    // build: {
    //   outDir: 'build',
    // },
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgrPlugin(),
      vanillaExtractPlugin(),
    ],
    server: {
      port: 4444,
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..']
      }
    },
    base: '/',
  };
});