import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n'
import reportWebVitals from './reportWebVitals';
import './assets/font/Gilroy/Gilroy-Light.otf';

ReactDOM.render(
  <Suspense fallback='Loading'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
