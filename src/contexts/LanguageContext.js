import { createContext, useState } from "react";

const LanguageContext = createContext();

//responsible for managing the state related to the context and providing it to the consuming components
const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("lenape");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContextProvider, LanguageContext };
