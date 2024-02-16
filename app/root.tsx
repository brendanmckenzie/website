import {
  Outlet,
  useCatch,
  useMatches,
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  LiveReload,
  Link,
  useLocation,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import globalStylesUrl from "~/styles/app.css";
import mobileStyles from "~/styles/mobile.css";

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "icon", href: "/images/photo.jpg", type: "image/jpeg" },
    {
      rel: "stylesheet",
      href: mobileStyles,
      media: "only screen and (max-width: 600px)",
    },
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "RSS Feed for www.bmck.au",
      href: "/rss.xml",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = "Unknown error";
  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const matches = useMatches();
  const loc = useLocation();

  const includeScripts = matches.some((match) => match.handle?.hydrate);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          httpEquiv="content-security-policy"
          content="script-src 'self' 'unsafe-inline' plausible.io; style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com unpkg.com; img-src 'self' cdn.pokko.io; font-src fonts.gstatic.com"
        />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <link rel="icon" type="image/jpeg" href="/images/photo.jpg" />
        <link rel="canonical" href={`https://www.bmck.au${loc.pathname}`} />
        <script
          defer
          data-domain="bmck.au"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {includeScripts && <Scripts />}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const excludeLayout = matches.some((match) => match.handle?.layout === false);
  const excludeHeader = matches.some((match) => match.handle?.header === false);

  if (excludeLayout) {
    return <>{children}</>;
  }

  return (
    <>
      {excludeHeader ? null : (
        <header>
          <Link to="/" title="Brendan McKenzie">
            <h1>Brendan McKenzie</h1>
          </Link>
          <p>
            Seasoned software developer with a knack for tackling complex
            technical challenges. When I'm not heads-down coding, you can
            usually find me indulging in two of my other passions: exploring the
            world through travel and creating culinary delights in the kitchen.
          </p>
        </header>
      )}

      {children}

      <footer>
        <ul>
          <li>
            &copy; <Link to="/">Brendan McKenzie</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
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
    </>
  );
}
