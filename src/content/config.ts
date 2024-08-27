import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				banner: z.object({ content: z.string() }).default({
					content: `Liwan is currently in beta. If you encounter any issues or have feedback, please let us know on <a href="https://github.com/explodingcamera/liwan/issues">Github</a>.`,
				}),
			}),
		}),
	}),
};
