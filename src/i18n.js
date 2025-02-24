import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import hi from "./locales/hi.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
import id from "./locales/id.json";
import it from "./locales/it.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import ko from "./locales/ko.json";
import da from "./locales/da.json";
import cs from "./locales/cs.json";
import sv from "./locales/sv.json";
import pl from "./locales/pl.json";
import nl from "./locales/nl.json";
import ro from "./locales/ro.json";
import th from "./locales/th.json";
import vi from "./locales/vi.json";
import ar from "./locales/ar.json";
import tr from "./locales/tr.json";
import ja from "./locales/ja.json";
import ka from "./locales/ka.json";
import fi from "./locales/fi.json";

const resources = {
    "en": { translation: en },
    "es": { translation: es },
    "hi": { translation: hi },
    "pt": { translation: pt },
    "ru": { translation: ru },
    "id": { translation: id },
    "it": { translation: it },
    "de": { translation: de },
    "fr": { translation: fr },
    "ko": { translation: ko },
    "da": { translation: da },
    "cs": { translation: cs },
    "sv": { translation: sv },
    "pl": { translation: pl },
    "nl": { translation: nl },
    "ro": { translation: ro },
    "th": { translation: th },
    "vi": { translation: vi },
    "ar": { translation: ar },
    "tr": { translation: tr },
    "ja": { translation: ja },
    "ka": { translation: ka },
    "fi": { translation: fi }
};

// Detect language from URL (example.com/es)
const getLanguage = () => {
  const lang = window.location.pathname.split("/")[1]; 
  return Object.keys(resources).includes(lang) ? lang : "en";
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
