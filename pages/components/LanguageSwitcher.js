import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  useEffect(() => {
    // Set the `dir` and `className` based on the current locale
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.className = locale === 'fa' ? 'rtl' : 'ltr';
  }, [locale]);

  const changeLanguage = (lang) => {
    if (lang !== locale) {
      router.push(asPath, asPath, { locale: lang });
    }
  };

  return (
    <div className="flex space-x-4 rtl:space-x-reverse">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-4 py-2 rounded ${
            lang === locale ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
