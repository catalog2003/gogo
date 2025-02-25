import json
import os
import time
from deep_translator import GoogleTranslator
from requests.exceptions import RequestException
from translate import Translator  # Alternative translator

# Define Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Get script directory
LOCALES_DIR = os.path.join(BASE_DIR, "src", "locales")  # Path to locales folder
I18N_PATH = os.path.join(BASE_DIR, "src", "i18n.js")  # Path to i18n.js
APP_PATH = os.path.join(BASE_DIR, "src", "App.jsx")  # Path to App.jsx
EN_JSON_PATH = os.path.join(LOCALES_DIR, "en.json")  # English JSON path


def slugify(text):
    """Convert text to a URL-friendly slug (lowercase, replace spaces with hyphens)."""
    return text.lower().replace(" ", "-")


def load_page_titles():
    """Load 'Page Title' from each language JSON file and generate slugs."""
    page_titles = {}
    
    for lang_code in os.listdir(LOCALES_DIR):
        if lang_code.endswith(".json"):
            lang = lang_code.replace(".json", "")
            try:
                with open(os.path.join(LOCALES_DIR, lang_code), "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if "Page Title" in data:
                        page_titles[lang] = slugify(data["Page Title"])
                    else:
                        page_titles[lang] = lang  # Fallback to lang code if not found
            except Exception as e:
                print(f"⚠️ Error loading {lang_code}: {e}")
                page_titles[lang] = lang  # Fallback

    return page_titles

# Ensure locales directory exists
os.makedirs(LOCALES_DIR, exist_ok=True)

# Supported Languages
LANGUAGES = {
    "es": "Spanish",
    "hi": "Hindi",
    "pt": "Portuguese",
    "ru": "Russian",
    "id": "Indonesian",
    "it": "Italian",
    "de": "German",
    "fr": "French",
    "ko": "Korean",
    "da": "Danish",
    "cs": "Czech",
    "sv": "Swedish",
    "pl": "Polish",
    "nl": "Dutch",
    "ro": "Romanian",
    "th": "Thai",
    "vi": "Vietnamese",
    "ar": "Arabic",
    "tr": "Turkish",
    "ja": "Japanese",
    "ka": "Georgian",
    "fi": "Finnish"
}

def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(data, file_path):
    """Save JSON data to a file."""
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def google_translate(text, target_lang, retries=3, delay=5):
    """Translate text using Google Translator with retries."""
    for attempt in range(retries):
        try:
            return GoogleTranslator(source="auto", target=target_lang).translate(text)
        except RequestException as e:
            print(f"⚠️ Google Translate failed ({attempt+1}/{retries}): {e}")
            time.sleep(delay)
    print(f"❌ Google Translate failed after {retries} attempts. Using backup translator...")
    return alternative_translate(text, target_lang)  # Fallback method

def alternative_translate(text, target_lang):
    """Backup translation using translate library."""
    try:
        translator = Translator(to_lang=target_lang)
        return translator.translate(text)
    except Exception as e:
        print(f"⚠️ Backup translation failed: {e}")
        return text  # Return original text if all translations fail

def translate_json(data, target_lang):
    """Recursively translate a JSON structure."""
    translated_data = {}
    for key, value in data.items():
        if isinstance(value, dict):
            translated_data[key] = translate_json(value, target_lang)
        else:
            time.sleep(1)  # Add delay to prevent rate-limiting
            translated_data[key] = google_translate(value, target_lang)
    return translated_data

def generate_translations():
    """Generate translated JSON files for each target language."""
    if not os.path.exists(EN_JSON_PATH):
        print(f"❌ English JSON file not found: {EN_JSON_PATH}")
        return

    en_data = load_json(EN_JSON_PATH)

    for lang_code, lang_name in LANGUAGES.items():
        print(f"🌍 Translating to {lang_name} ({lang_code})...")
        translated_data = translate_json(en_data, lang_code)
        save_json(translated_data, os.path.join(LOCALES_DIR, f"{lang_code}.json"))

    print("✅ All translations generated successfully!")

def update_i18n_js():

    """Update i18n.js with new languages."""
   
    language_imports = "\n".join([f'import {code} from "./locales/{code}.json";' for code in LANGUAGES.keys()])
    resources_dict = ",\n    ".join([f'"{code}": {{ translation: {code} }}' for code in LANGUAGES.keys()])

    i18n_js_content = f"""import i18n from "i18next";
import {{ initReactI18next }} from "react-i18next";

import en from "./locales/en.json";
{language_imports}

const resources = {{
    "en": {{ translation: en }},
    {resources_dict}
}};

// Detect language from URL (example.com/es)
const getLanguage = () => {{
  const lang = window.location.pathname.split("/")[1]; 
  return Object.keys(resources).includes(lang) ? lang : "en";
}};

i18n
  .use(initReactI18next)
  .init({{
    resources,
    lng: getLanguage(),
    fallbackLng: "en",
    interpolation: {{ escapeValue: false }}
  }});

export default i18n;
"""

    with open(I18N_PATH, "w", encoding="utf-8") as f:
        f.write(i18n_js_content)

    print(f"✅ Updated i18n.js at {I18N_PATH}")

def update_app_jsx():
    """Update App.jsx to include language-based routing."""
    page_titles = load_page_titles()
    routes = "\n          ".join([
       # f'<Route path="/{code}" element={{<Picturetotext/>}} />\n          '
    f'<Route path="/{code}/{page_titles[code]}" element={{<Picturetotext/>}} />'
        for code in LANGUAGES.keys()
    ])

    app_jsx_content = f"""import React from "react";
import {{ BrowserRouter as Router, Routes, Route, Navigate }} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Imagetotext from "./Pages/Imagetotext";
import Jpgtotext from "./Pages/Jpgtotext";
import Picturetotext from "./Pages/Picturetotext";
import Privacypolicay from "./Pages/Privacypolicy";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import {{ I18nextProvider }} from "react-i18next";
import i18n from "./i18n"; 

function App() {{
  return (
    <I18nextProvider i18n={{i18n}}>
      <Router>
      <Navbar />
        <Routes>
          {routes}
          <Route path="/" element={{<Picturetotext />}} />
          <Route path="/picture-to-text" element={{<Picturetotext />}} />
          <Route path="/image-to-text" element={{<Imagetotext />}} />
          <Route path="/jpg-to-text" element={{<Jpgtotext />}} />
          <Route path="/privacy-policy" element={{<Privacypolicay />}} />
          <Route path="/contact" element={{<Contact />}} />
          <Route path="/about" element={{<About />}} />
          <Route path="*" element={{<Navigate to="/" />}} />
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}}

export default App;
"""

    with open(APP_PATH, "w", encoding="utf-8") as f:
        f.write(app_jsx_content)

    print(f"✅ Updated App.jsx at {APP_PATH}")

if __name__ == "__main__":
    generate_translations()
    update_i18n_js()
    update_app_jsx()
    print("🎉 All tasks completed successfully!")
