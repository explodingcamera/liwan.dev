import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import Caddyfile from "./src/assets/caddyfile.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
	site: "https://liwan.dev",
	markdown: {
		shikiConfig: {
			// biome-ignore lint/suspicious/noExplicitAny: Type is correct
			langs: [Caddyfile as any],
		},
	},
	integrations: [
		starlight({
			title: "Liwan",
			logo: {
				src: "./src/assets/favicon.svg",
			},
			customCss: ["@fontsource-variable/figtree", "./src/styles/custom.css"],
			description: "Liwan is a lightweight web analytics tool that respects your users' privacy.",
			credits: false,
			social: {
				github: "https://github.com/explodingcamera/liwan",
			},
			sidebar: [
				{
					label: "Start Here",
					items: [
						{ label: "Getting Started", slug: "getting-started" },
						{
							label: "Adding your first Website",
							slug: "adding-your-first-website",
						},
					],
				},
				{
					label: "Guides",
					autogenerate: { directory: "guides" },
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
