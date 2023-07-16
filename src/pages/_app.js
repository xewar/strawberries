import "@/styles/globals.css";
import Header from "@/components/Header";
import { LanguageContextProvider } from "../contexts/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <div className="text-yellow-800 font-neue-haas tracking-wider">
        <Header />
        <Component {...pageProps} />
      </div>
      <div className="z-50 noise fixed  top-0 h-full w-full pointer-events-none"></div>
    </LanguageContextProvider>
  );
}
