import "@/styles/globals.css";
import Header from "@/components/Header";
import { LanguageContextProvider } from "../contexts/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <div className="text-yellow-800 font-neue-haas tracking-wider">
        <Header />
        <Component {...pageProps} />
        <div className="noise fixed bg-opacity-30 top-0 h-full w-full pointer-events-none"></div>
      </div>
    </LanguageContextProvider>
  );
}
