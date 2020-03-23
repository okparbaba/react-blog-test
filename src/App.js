import React from 'react';
import {Route, BrowserRouter, Link} from "react-router-dom";
import Nav from './components/Nav/nav';
import Banner from './components/Nav/banner';
import Show from './components/Article/show';
import Footer from './components/Footer/footer';
function App() {
  return <>
    <BrowserRouter>
    <Nav/>
    <Banner/>
    <Show/>
    <Footer/>
    </BrowserRouter>
  </>;
}

export default App;
