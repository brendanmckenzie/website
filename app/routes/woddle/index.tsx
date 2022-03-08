import { LinksFunction } from "remix";
import styles from "../../styles/woddle.css";

export const handle = { layout: false };

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <main>
      <h1>Woddle</h1>
      <p>
        This is an app I built that suits my needs. I just wanted something to
        keep track of my gym sessions.
      </p>
      <p>I hope you like it too!</p>
      <p>
        I'd love to hear from you if you have any feedback. Email me at hello at
        brendanmckenzie dot com
      </p>
      <p>
        Download from the{" "}
        <a href="https://apps.apple.com/us/app/woddle/id1148294214">AppStore</a>
      </p>
    </main>
  );
}
