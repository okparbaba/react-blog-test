import React from 'react';
import Nav from '../components/Nav/nav';
import Banner from '../components/Nav/banner';
import Show from '../components/Article/show';
import Footer from '../components/Footer/footer';
const Home=()=>{
    return(
        <>
        <Nav/>
        <Banner/>
        <Show/>
        <Footer/>
        </>
    );
}

export default Home;