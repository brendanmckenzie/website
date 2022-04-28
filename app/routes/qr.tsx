import * as React from "react";
import QRCode from "qrcode-svg";
import { LinksFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: `QR Code Generator - Brendan McKenzie`,
    description: "",
  };
};

import style from "../styles/qr.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export const handle = { hydrate: true, layout: false };

const QRCodePage: React.FC = () => {
  const [value, setValue] = React.useState("");

  const [svg, url] = React.useMemo(() => {
    if (value) {
      const val = new QRCode({ content: value }).svg();
      const urlVal = btoa(val);

      return [val, urlVal];
    }
    return ["", ""];
  }, [value]);

  return (
    <>
      <div className="qr">
        <input
          type="text"
          placeholder="QR Content"
          value={value}
          onChange={(ev) => setValue(ev.currentTarget.value)}
          autoFocus
        />

        {svg ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: svg }} />

            <a href={`data:text/svg;base64,${url}`} download="qrcode.svg">
              download svg
            </a>

            <textarea value={svg} rows={20} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default QRCodePage;
