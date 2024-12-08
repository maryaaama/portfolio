import { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ dir, locale }) {
  return (
    <Html dir={dir} lang={locale} className={dir}> {/* Apply 'rtl' or 'ltr' dynamically */}
      <Head />
      <body className={`font-IRANRounded ${dir}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const locale = ctx?.locale || 'en';
  const dir = locale === 'fa' ? 'rtl' : 'ltr';
  return {
    ...initialProps,
    dir,
    locale,
  };
};
