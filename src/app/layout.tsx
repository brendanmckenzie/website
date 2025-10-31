import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "../styles/app.css";

export const metadata: Metadata = {
	title: "Brendan McKenzie",
	description: "Software and technology enthusiast, focussed on pushing the envelope with emerging technologies.",
	icons: {
		icon: "/images/photo.jpg",
	},
};

function Header() {
	return (
		<header>
			<Link href="/" title="Brendan McKenzie">
				<h1>Brendan McKenzie</h1>
			</Link>
			<p>
				Seasoned software developer with a knack for tackling complex
				technical challenges. When I&apos;m not heads-down coding, you can
				usually find me indulging in two of my other passions: exploring the
				world through travel and creating culinary delights in the kitchen.
			</p>
		</header>
	);
}

function Footer() {
	return (
		<footer>
			<ul>
				<li>
					&copy; <Link href="/">Brendan McKenzie</Link>
				</li>
				<li>
					<Link href="/cv">CV</Link>
				</li>
				<li>
					<a
						href="https://plausible.io/bmck.au/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Stats
					</a>
				</li>
				<li>
					Powered by{" "}
					<a
						href="https://www.pokko.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Pokko
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<meta
					httpEquiv="content-security-policy"
					content="script-src 'self' 'unsafe-inline' plausible.io; style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com unpkg.com; img-src 'self' cdn.pokko.io; font-src fonts.gstatic.com"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
				/>
				<link
					rel="alternate"
					type="application/rss+xml"
					title="RSS Feed for www.bmck.au"
					href="/rss.xml"
				/>
				<Script
					defer
					data-domain="bmck.au"
					src="https://plausible.io/js/plausible.js"
				/>
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
