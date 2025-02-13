import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Providers } from "@/providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Header } from "@/shared"
import { siteConfig } from "@/config/site"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		// why add suppressHydrationWarning? https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<Providers>
					<Header />
					<main className="flex flex-col">{children}</main>
					<SpeedInsights />
				</Providers>
			</body>
		</html>
	)
}
