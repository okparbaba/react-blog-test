import React from 'react';

const Footer = ()=>{
    return(

        <footer className="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn">
            {/*Call to action*/}
            <div className="pt-4">
            <a className="btn btn-outline-white" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" role="button">Download MDB
                <i className="fas fa-download ml-2" />
            </a>
            <a className="btn btn-outline-white" href="https://mdbootstrap.com/education/bootstrap/" target="_blank" role="button">Start
                free tutorial
                <i className="fas fa-graduation-cap ml-2" />
            </a>
            </div>
            {/*/.Call to action*/}
            <hr className="my-4" />
            {/* Social icons */}
            <div className="pb-4">
            <a href="https://www.facebook.com/mdbootstrap" target="_blank">
                <i className="fab fa-facebook-f mr-3" />
            </a>
            <a href="https://twitter.com/MDBootstrap" target="_blank">
                <i className="fab fa-twitter mr-3" />
            </a>
            <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
                <i className="fab fa-youtube mr-3" />
            </a>
            <a href="https://plus.google.com/u/0/b/107863090883699620484" target="_blank">
                <i className="fab fa-google-plus-g mr-3" />
            </a>
            <a href="https://dribbble.com/mdbootstrap" target="_blank">
                <i className="fab fa-dribbble mr-3" />
            </a>
            <a href="https://pinterest.com/mdbootstrap" target="_blank">
                <i className="fab fa-pinterest mr-3" />
            </a>
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank">
                <i className="fab fa-github mr-3" />
            </a>
            <a href="http://codepen.io/mdbootstrap/" target="_blank">
                <i className="fab fa-codepen mr-3" />
            </a>
            </div>
            {/* Social icons */}
            {/*Copyright*/}
            <div className="footer-copyright py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> www.reactblog.com </a>
            </div>
            {/*/.Copyright*/}
        </footer>
        
    );
}
export default Footer;