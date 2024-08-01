import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://liwan.dev",
	integrations: [
		starlight({
			title: "Liwan",
			logo: {
				src: "./src/assets/favicon.svg",
			},
			customCss: ["@fontsource-variable/figtree", "./src/styles/custom.css"],
			description:
				"Liwan is a lightweight web analytics tool that respects your users' privacy.",
			credits: false,
			social: {
				github: "https://github.com/explodingcamera/liwan",
			},
			sidebar: [
				{
					label: "Start Here",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Getting Started", slug: "getting-started" },
					],
				},
				// {
				// 	label: "Reference",
				// 	autogenerate: { directory: "reference" },
				// },
			],
		}),
	],
});
