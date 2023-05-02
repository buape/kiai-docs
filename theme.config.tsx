import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
	logo: <span>Kiai Documentation</span>,
	project: {
		link: "https://github.com/buape/kiai-docs",
	},
	chat: {
		link: "https://discord.gg/T6gwuyNSv3",
	},
	docsRepositoryBase: "https://github.com/buape/kiai-docs/tree/main",
	footer: {
		text: "© 2023 Buape Studios",
	},
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s – Kiai Docs",
			};
		}
	},
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const url =
			"https://docs.kiaibot.com" +
			(defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:url" content={url} />
				<meta
					property="og:title"
					content={frontMatter.title || "Kiai Documentation"}
				/>
				<meta
					property="og:description"
					content={
						frontMatter.description ||
						"The main documentation for Kiai"
					}
				/>
			</>
		);
	},
	logoLink: "https://raw.githubusercontent.com/buape/resources/main/kiai.png",
	
};

export default config;
