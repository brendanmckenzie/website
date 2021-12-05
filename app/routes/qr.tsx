import * as React from "react";
import QRCode from "qrcode-svg";
import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: `QR Code Generator - Brendan McKenzie`,
    description: "",
  };
};

export const handle = { hydrate: true };

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
      <div>
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
