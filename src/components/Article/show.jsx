import React from 'react';
import Article from './article';

const Show=()=>{
    return(
        <main className="mt-5 pt-5">
            <div className="container">
            <hr className="my-5" />
            {/*Section: Cards*/}
            <section className="text-center">
                {/*Grid row*/}
                <div className="row mb-4 wow fadeIn">
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
                {/*Grid row*/}
              
                {/*Pagination*/}
                <nav className="d-flex justify-content-center wow fadeIn">
                <ul className="pagination pg-blue">
                    {/*Arrow left*/}
                    <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </a>
                    </li>
                    <li className="page-item active">
                    <a className="page-link" href="#">1
                        <span className="sr-only">(current)</span>
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">4</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">5</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                    </a>
                    </li>
                </ul>
                </nav>
                {/*Pagination*/}
            </section>
            {/*Section: Cards*/}
            </div>
        </main>
    
    );
}
export default Show;