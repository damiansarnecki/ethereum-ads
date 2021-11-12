import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AdList } from './components/AdList';
import { StyledHeader } from './components/Header/index.styles';
import Header from './components/Header';
import { AccountContext } from './components/AccountContext';



function App() {

  const [account, setAccount] = useState("")
  const providerValue = {account, setAccount}

  return (
    
      <div className="App">
        <AccountContext.Provider value={(providerValue as any)}>
          <Header/>
          <AdList/>
        </AccountContext.Provider>
      </div>
  );
}

export default App;
