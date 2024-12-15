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
    <div className="flex lg:space-x-4 space-x-2 rtl:space-x-reverse text-sm sm:text-base">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`lg:px-4 py-2 px-2.5  rounded ${
            lang === locale ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
