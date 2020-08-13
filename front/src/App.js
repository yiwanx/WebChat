import React from 'react';
import './App.css';
import Chat from './components/Chat'
import Create from "./components/Create";
import Join from "./components/Join";
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
      <Route exact path="/" component={Create}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/join" component={Join}/>
    </BrowserRouter>
)

export default App;
