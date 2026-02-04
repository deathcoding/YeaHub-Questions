import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [react(), visualizer({ open: true })],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "hljs-languages": path.resolve(
                __dirname,
                "./node_modules/highlight.js/lib/languages"
            ),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("highlight.js") && id.includes("/lib/languages/")) {
                        return;
                    }

                    if (id.includes("highlight.js") && !id.includes("/lib/languages/")) {
                        return "vendor-hljs-core";
                    }

                    if (id.includes("@reduxjs/toolkit/dist/query")) {
                        return "vendor-rtk-query";
                    }
                    if (id.includes("@reduxjs/toolkit")) {
                        return "vendor-redux-toolkit";
                    }

                    if (id.includes("react") || id.includes("react-dom")) {
                        return 'vendor-react';
                    }

                    if (id.includes("markdown-it")) {
                        return "vendor-markdown-it";
                    }
                    if (id.includes("dompurify")) {
                        return "vendor-dompurify";
                    }

                    if (id.includes("node_modules")) {
                        return "vendor-others";
                    }
                },
            },
        },
    },
});
