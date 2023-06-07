import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n.js';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useLanguageStore } from '../hooks/languageStore';
//@ts-ignore
import Header from '../components/Header.tsx';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  console.log("JKNK", setLanguage)
  
  
  const changeLanguage = (language:string) => {
    setLanguage(language);
  };

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);




  return (
    <div className="bg-indigo-50">
     {/*  <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('de')}>German</button>
      console.log()
      <Header /> */}
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} selectedLanguage={selectedLanguage} />
      </I18nextProvider>
    </div>
  );
}

export default MyApp;
