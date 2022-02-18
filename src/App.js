import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextDataProvider from './Contexts/ContextData';
import { HomePage, NotFound } from './Pages';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie'
import './App.css';

function App() {

// Use translation from i18n
  const { t } = useTranslation();

// Language options
  const initialLanguageOptions = [
    {name: 'en', countryCode: 'en'},
    {name: 'ar', countryCode: 'ae', dir: 'rtl'}
  ];
  function handleLngSelect(name){
    if(name){
      i18next.changeLanguage(name)
    }
  }

  const currentLanguageCode = cookies.get('i18next');
  const currentLanguage = initialLanguageOptions.find(i=>i.countryCode === currentLanguageCode) || 'en'
  const languageOptions = { select: currentLanguage, handleLngSelect: handleLngSelect, options: initialLanguageOptions, name: t('language') }

  function changeArabicFont(){
    if(currentLanguageCode === 'ar') window.document.body.classList.add('arabic');
    else window.document.body.classList.remove('arabic')
  }

  return (
    // newest version of react-router (V6)
    // make all data accessible whole project by context hook
    <ContextDataProvider>
      {changeArabicFont()}
      <Router>
        <div className="App container">
            <Routes>
              <Route  path="/" exact element={<HomePage languageOptions={languageOptions} />} />
              <Route  element={<NotFound />} />  {/* Not found 404 */}
            </Routes>
        </div>
      </Router>
    </ContextDataProvider>
  );
}

export default App;
