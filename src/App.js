import React from 'react';
import {reducer, initialState} from './contexts/User/reducer.js';

import Features from './Features';
import Navbar from './Navbar';
import Footer from './Footer';

import './App.css';
import logo from './logo.svg';

export const UserContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const UserProvider = ({children}) => {
  const [state,dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // setTimeout(() => {
      dispatch({type: 'toggle_startup'});
      console.log("YEISDJFDFSKLJLDKJFL")
    // },100);
  }, [])

  return (
    <UserContext.Provider value = {[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Features />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
