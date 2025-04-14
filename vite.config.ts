import { defineConfig, ConfigEnv, UserConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  const componentTagger = mode === 'development' 
    ? (await import('lovable-tagger')).componentTagger 
    : null;

  const plugins: PluginOption[] = [react()];
  if (componentTagger) {
    plugins.push(componentTagger());
  }

  return {
    base: '/HIMTECH/',
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
