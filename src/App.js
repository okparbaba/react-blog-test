import React from 'react';
import {Route, BrowserRouter, Link} from "react-router-dom";
import CreateArticle from './components/Article/create';
import Home from './components/welcome';
import Login from './components/User/login';
import Register from './components/User/register';
function App() {
  return <>
    <BrowserRouter>
    
    <Route path="/" exact component={Home}></Route>
    <Route path="/article/create" component={CreateArticle}></Route>
    <Route path="/user/login" component={Login}></Route>
    <Route path="/user/register" component={Register}></Route>
    </BrowserRouter>
  </>;
}

export default App;
