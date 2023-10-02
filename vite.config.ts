import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './client/dist',
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: /^c@(?=\/)/, replacement: path.resolve(__dirname, './client/src') },
    ],
  },
  plugins: [ react() ],
});
