"use client";

import * as React from "react";
import * as ReactDOM from "react-dom/server";
import QRCode from "react-qr-code";
import "~/styles/qr.css";

export default function QRCodePage() {
	const [value, setValue] = React.useState("");

	const [svg, url] = React.useMemo(() => {
		if (value) {
			const val = ReactDOM.renderToStaticMarkup(
				React.createElement(QRCode, { value })
			);
			const urlVal = btoa(val);

			return [val, urlVal];
		}
		return ["", ""];
	}, [value]);

	React.useEffect(() => {
		const qs = new URLSearchParams(window.location.search);
		if (qs.has("content")) {
			setValue(qs.get("content")!);
		}
	}, []);

	return (
		<div className="qr">
			<input
				type="text"
				placeholder="QR Content"
				value={value}
				onChange={(ev) => setValue(ev.currentTarget.value)}
				autoFocus
			/>

			{value ? (
				<>
					<QRCode value={value} />

					<a href={`data:text/svg;base64,${url}`} download="qrcode.svg">
						download svg
					</a>

					<textarea
						value={svg
							.replace(/<path /g, "\n  <path ")
							.replace(/<\/svg/, "\n<svg")
							.replace(/><\/path>/g, " />")}
						rows={20}
					/>
				</>
			) : null}
		</div>
	);
}
