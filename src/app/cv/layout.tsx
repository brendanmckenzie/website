import Script from "next/script";
import "@/styles/cv.css";

export const metadata = {
	title: "Curriculum Vitae of Brendan McKenzie",
	description:
		"Software and technology enthusiast, focussed on pushing the envelope with emerging technologies.",
	icons: {
		icon: "/images/photo.jpg",
	},
};

export default function CVLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
				/>
				<Script
					defer
					data-domain="bmck.au"
					src="https://plausible.io/js/plausible.js"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
