import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextDataProvider from './Contexts/ContextData';
import { HomePage, NotFound } from './Pages';
import './App.css';

function App() {
  return (
    // newest version of react-router (V6)
    // make all data accessible whole project by context hook
    <ContextDataProvider>
      <Router>
        <div className="App container">
            <Routes>
              <Route  path="/" exact element={<HomePage />} />
              <Route  element={<NotFound />} />  {/* Not found 404 */}
            </Routes>
        </div>
      </Router>
    </ContextDataProvider>
  );
}

export default App;
