"use client";
import { useEffect } from "react";

export const GoogleTranslate = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages : "en,fr,es,de,it,pt,nl,sv,pl,ru,zh-CN,zh-TW,ja,ko,ar,hi,bn,sw,am,yo,ha,ig,tr,fa,id,ms,th,vi", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
};
