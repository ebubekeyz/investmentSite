// vite.config.js
import { defineConfig } from "file:///C:/Users/JOE/Desktop/profitmaximize.com/starter/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/JOE/Desktop/profitmaximize.com/starter/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  sever: {
    proxy: {
      "/api": "https://trex-holding-server.onrender.com/"
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKT0VcXFxcRGVza3RvcFxcXFxwcm9maXRtYXhpbWl6ZS5jb21cXFxcc3RhcnRlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSk9FXFxcXERlc2t0b3BcXFxccHJvZml0bWF4aW1pemUuY29tXFxcXHN0YXJ0ZXJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0pPRS9EZXNrdG9wL3Byb2ZpdG1heGltaXplLmNvbS9zdGFydGVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2V2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiAnaHR0cHM6Ly90cmV4LWhvbGRpbmctc2VydmVyLm9ucmVuZGVyLmNvbS8nLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFTLG9CQUFvQjtBQUN4VyxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ25CLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==