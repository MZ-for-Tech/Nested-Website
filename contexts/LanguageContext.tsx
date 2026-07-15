"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, Lang } from "@/lib/translations";

type TranslationShape = typeof translations["en"];

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: TranslationShape;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  tr: translations["en"],
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("nu-lang") as Lang | null;
    if (saved === "en" || saved === "ar") {
      setLangState(saved);
    }
  }, []);

  // Update <html> dir + lang + persist on every change
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("nu-lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        tr: translations[lang] as TranslationShape,
        dir: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
