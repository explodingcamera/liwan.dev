import { parse } from "marked";

// top-level await (only works in Server Components / Node-like environment)
const res = await fetch(
	"https://raw.githubusercontent.com/explodingcamera/liwan/refs/heads/main/CHANGELOG.md",
);
const md = await res.text();
const md2 = md.split("\n").slice(3).join("\n");
const html = parse(md2);

export const Changelog = () => {
	// biome-ignore lint/security/noDangerouslySetInnerHtml: our own repo
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
