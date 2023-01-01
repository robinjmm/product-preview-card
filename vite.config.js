import {defineConfig} from "vite";
import {createHtmlPlugin} from "vite-plugin-html";
import autoprefixer from "autoprefixer";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

export default defineConfig({
	plugins: [
        createHtmlPlugin({
			minify: true
        })
	],
	css: {
        postcss: {
            plugins: [
                autoprefixer,
				purgeCSSPlugin({
					content: ["index.html"],
					variables: true,
					keyframes: true
                })
            ]
        }
    }
})