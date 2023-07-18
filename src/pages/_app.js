import Head from "next/head";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { LanguageContextProvider } from "../contexts/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="text-yellow-800 font-neue-haas tracking-wider">
        <Header />
        <Component {...pageProps} />
      </div>
      <div className="z-50 noise fixed  top-0 h-full w-full pointer-events-none"></div>
    </LanguageContextProvider>
  );
}
