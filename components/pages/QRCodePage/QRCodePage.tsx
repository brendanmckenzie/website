import * as React from "react";
import QRCode from "qrcode-svg";
import Head from "next/head";
import * as styles from "./QRCodePage.css";

const QRCodePage: React.FC = () => {
  const [value, setValue] = React.useState("");

  const [svg, url] = React.useMemo(() => {
    if (value) {
      const val = new QRCode({ content: value }).svg();
      const urlVal = Buffer.from(val).toString("base64");

      return [val, urlVal];
    }
    return ["", ""];
  }, [value]);

  return (
    <>
      <Head>
        <title>QR Code Generator - Brendan McKenzie</title>
      </Head>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="QR Content"
          value={value}
          onChange={(ev) => setValue(ev.currentTarget.value)}
          autoFocus
        />

        {svg ? (
          <>
            <div
              className={styles.svg}
              dangerouslySetInnerHTML={{ __html: svg }}
            />

            <a
              className={styles.download}
              href={`data:text/svg;base64,${url}`}
              download="qrcode.svg"
            >
              download svg
            </a>

            <textarea className={styles.input} value={svg} rows={20} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default QRCodePage;
