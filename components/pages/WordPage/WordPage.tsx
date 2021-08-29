import Head from "next/head";
import * as React from "react";

import style from "./WordPage.module.scss";

const WordPage: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any | null>(null);
  const inputRef = React.useRef<HTMLInputElement>();

  const handleSubmit: React.FormEventHandler = async (ev) => {
    ev?.preventDefault();

    setLoading(true);
    const result = await fetch(
      `/api/word?query=${inputRef.current.value}`
    ).then((res) => res.json());
    setData(result);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Brendan McKenzie</title>
      </Head>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className={style.input}
            autoFocus
            placeholder="What do you seek?"
          />
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          <ul className={style.words}>
            {data.map((ent, idx) => {
              if (ent.suggestion) {
                return (
                  <li key={idx}>
                    Did you mean{" "}
                    <button
                      onClick={() => {
                        inputRef.current.value = ent.word;
                        handleSubmit(null);
                      }}
                    >
                      {ent.word}
                    </button>
                  </li>
                );
              }
              return (
                <li key={ent.id}>
                  <p>
                    <span className={style.word}>{ent.id}</span>{" "}
                    <small>{ent.fl}</small>
                  </p>
                  <ul className={style.definitions}>
                    {ent.shortdef.map((def, idx2) => (
                      <li key={idx2}>{def}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default WordPage;
