// vite.config.ts
import { VitePWA } from "file:///C:/Users/dpalma/repos/vocaltick.github.io/frontend/node_modules/vite-plugin-pwa/dist/index.js";
import { defineConfig } from "file:///C:/Users/dpalma/repos/vocaltick.github.io/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/dpalma/repos/vocaltick.github.io/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    injectRegister: false,
    pwaAssets: {
      disabled: false,
      config: true
    },
    manifest: {
      name: "Annoucement app",
      short_name: "ANapp",
      description: "Escucha anuncios presonalizados desde la app",
      theme_color: "#ffffff"
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true
    },
    devOptions: {
      enabled: true,
      navigateFallback: "index.html",
      suppressWarnings: true,
      type: "module"
    }
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkcGFsbWFcXFxccmVwb3NcXFxcdm9jYWx0aWNrLmdpdGh1Yi5pb1xcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZHBhbG1hXFxcXHJlcG9zXFxcXHZvY2FsdGljay5naXRodWIuaW9cXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2RwYWxtYS9yZXBvcy92b2NhbHRpY2suZ2l0aHViLmlvL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIFZpdGVQV0Eoe1xyXG4gICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICBpbmplY3RSZWdpc3RlcjogZmFsc2UsXHJcblxyXG4gICAgcHdhQXNzZXRzOiB7XHJcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgY29uZmlnOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBtYW5pZmVzdDoge1xyXG4gICAgICBuYW1lOiAnQW5ub3VjZW1lbnQgYXBwJyxcclxuICAgICAgc2hvcnRfbmFtZTogJ0FOYXBwJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdFc2N1Y2hhIGFudW5jaW9zIHByZXNvbmFsaXphZG9zIGRlc2RlIGxhIGFwcCcsXHJcbiAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB9LFxyXG5cclxuICAgIHdvcmtib3g6IHtcclxuICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLHN2ZyxwbmcsaWNvfSddLFxyXG4gICAgICBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXM6IHRydWUsXHJcbiAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgZGV2T3B0aW9uczoge1xyXG4gICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnaW5kZXguaHRtbCcsXHJcbiAgICAgIHN1cHByZXNzV2FybmluZ3M6IHRydWUsXHJcbiAgICAgIHR5cGU6ICdtb2R1bGUnLFxyXG4gICAgfSxcclxuICB9KV0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVixTQUFTLGVBQWU7QUFDNVcsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUTtBQUFBLElBQ3pCLGNBQWM7QUFBQSxJQUNkLGdCQUFnQjtBQUFBLElBRWhCLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFFQSxVQUFVO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsY0FBYyxDQUFDLGdDQUFnQztBQUFBLE1BQy9DLHVCQUF1QjtBQUFBLE1BQ3ZCLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBRUEsWUFBWTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsTUFDbEIsa0JBQWtCO0FBQUEsTUFDbEIsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
