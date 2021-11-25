import * as React from "react";
import QRCode from "qrcode-svg";
import Head from "next/head";
import * as styles from "./QRCodePage.css";

const QRCodePage: React.FC = () => {
  const [value, setValue] = React.useState("");

  const svg = React.useMemo(() => {
    return value ? new QRCode({ content: value }).svg() : "";
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
        />

        {svg ? (
          <div
            className={styles.svg}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : null}

        {svg ? (
          <textarea className={styles.input} value={svg} rows={20} />
        ) : null}
      </div>
    </>
  );
};

export default QRCodePage;
