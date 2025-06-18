import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";

const config: DocsThemeConfig = {
	project: {
		link: "https://github.com/buape/kiai-docs",
	},
	chat: {
		link: "https://discord.gg/v6YJp5PSd5",
	},
	docsRepositoryBase: "https://github.com/buape/kiai-docs/tree/main",
	footer: {
		text: "© 2024 Buape Studios",
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
			"https://docs.kiai.app" +
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
	logo: (
		<>
		<Image
			src="/kiai.png"
			alt="Kiai Logo"
			width={25}
			height={25}
		/>
		<span style={{ marginLeft: '.4em', fontWeight: 800 }}>
			Kiai Documentation
		</span>
		</>
	),
	
};

export default config;
