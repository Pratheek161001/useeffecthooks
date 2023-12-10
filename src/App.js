import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  

  useEffect(()=>{
    const storedlocaldata=localStorage.getItem('isloggedin')

    if(storedlocaldata==='1'){
      setIsLoggedIn(true);
    }
  },[]);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {

    localStorage.setItem('isloggedin','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isloggedin')
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn,
  }}>
      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
