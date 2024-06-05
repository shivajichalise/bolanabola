import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import "dotenv/config"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envDir: "../",
    define: {
        "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    },
    preview: {
        port: 5173,
        host: true,
        strictPort: true,
    },
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        proxy: {
            "/api": {
                // target: "http://bolanabola_backend:3000", // use this for docker compose up
                target: "http://localhost:3000", // use this for local npm run dev
                changeOrigin: true,
            },
        },
    },
})
