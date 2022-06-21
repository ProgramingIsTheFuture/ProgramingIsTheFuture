/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementClass {
      render: any;
    }
  }
}

const App = () => {
  return (
    <html>
      <head>
        <title>ProgramingIsTheFuture</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
};

const handler = () => {
  const html = renderSSR(<App />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
};
serve(handler);
