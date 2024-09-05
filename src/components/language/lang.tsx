import React, { useEffect } from 'react';

const GoogleTranslate: React.FC = () => {

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Define the Google Translate init function globally
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
