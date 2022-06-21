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
    <div class={"app"}>
      <header>
        <div class={"profile-img"}></div>
        <h3>Francisco Santos</h3>
      </header>
    </div>
  );
};

const Page = () => {
  return (
    <html>
      <head>
        <title>ProgramingIsTheFuture</title>
        <style>
          body,html{"{"}
          width: 100%; height: 100%; margin: 0;
          {"}"}
          .app {"{"}
          width: 100%; height: 100%;
          {"}"}
          header {`{
            height: 30vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }`}
          .profile-img {`{
            background-image: url("https://github.com/ProgramingIsTheFuture.png") ;
            height: 100px;
            width: 100px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }`}
        </style>
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};

const handler = () => {
  const html = renderSSR(<Page />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
};
serve(handler);
