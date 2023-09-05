import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Party Action People</title>
        <meta
          name="description"
          content="Party Action People: DeFi’s nerdiest conference producers."
          key="desc"
        />
        <meta property="og:title" content="Party Action People" />
        <meta
          property="og:description"
          content="Party Action People: DeFi’s nerdiest conference producers."
        />
        <meta property="og:image" content="/assets/images/og.jpg" />
      </Head>{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
