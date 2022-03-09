import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './components/SignIn';


function App() {
  return (
    <BrowserRouter>
      <SignIn/>
    </BrowserRouter>
  );
}

export default App;
