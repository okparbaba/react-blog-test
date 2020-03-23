import React from 'react';

const Banner = () =>{
    return(
        <section className="card wow fadeIn" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)'}}>
            <div className="card-body text-white text-center py-5 px-5 my-5">
            <h1 className="mb-4">
                <strong>Learn Bootstrap 4 with MDB</strong>
            </h1>
            <p>
                <strong>Best &amp; free guide of responsive web design</strong>
            </p>
            <p className="mb-4">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written
                versions available. Create your own, stunning website.</strong>
            </p>
            <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" className="btn btn-outline-white btn-lg">Start
                free tutorial
                <i className="fas fa-graduation-cap ml-2" />
            </a>
            </div>
        </section>
              
    );
}
export default Banner;