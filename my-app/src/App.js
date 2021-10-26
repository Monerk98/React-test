import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About/About';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className = "appWrapper">
      <Header/>
      <Nav/>
      <div className="appWrapperContent">
      <Route path='/profile' component={Profile}/>
      <Route path='/dialogs' component={Dialogs} />
      <Route path='/about' component={About} />
      
      </div>
 </div>
 </BrowserRouter> 
  )
}
export default App

