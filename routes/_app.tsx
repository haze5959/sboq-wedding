import { AppProps } from "$fresh/server.ts";
import { tw } from 'twind'

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>sboq</title>
      </head>
      <body class={tw`bg-pink-50`}>
        <Component />
      </body>
    </html>
  );
}
