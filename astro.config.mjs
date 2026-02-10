//! (1) Generate the page at landing in >Vercel< (2) [modular generation]

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; //! (1)

export default defineConfig({
  output: 'server',
  integrations: [react(), tailwind()],
  adapter: vercel()
});