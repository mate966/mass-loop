import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        backend: {
            loadPath: "locale/i18n/{{ns}}/{{lng}}.json",
        },
        ns: ["heading", "nav", "about", "calculator", "buy"],
        lng: "pl",
        fallbackLng: "pl",
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
            useSuspense: true,
        },
    });

export default i18n;
