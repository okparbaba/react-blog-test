import React from 'react';

const Article=()=>{
    return(
        <div className="col-lg-4 col-md-6 mb-4">
        {/*Card*/}
        <div className="card">
          {/*Card image*/}
          <div className="view overlay">
            <img src="https://mdbootstrap.com/wp-content/uploads/2017/11/brandflow-tutorial-fb.jpg" className="card-img-top" alt="" />
            <a href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/" target="_blank">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card content*/}
          <div className="card-body">
            {/*Title*/}
            <h4 className="card-title">Bootstrap Automation</h4>
            {/*Text*/}
            <p className="card-text">Learn how to create a smart website which learns your user and reacts properly to
              his behavior.</p>
            <a href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/" target="_blank" className="btn btn-primary btn-md">Start tutorial
              <i className="fas fa-play ml-2" />
            </a>
          </div>
        </div>
        {/*/.Card*/}
      </div>
    );
}
export default Article;