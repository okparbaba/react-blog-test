import React from 'react';
import Nav from '../Nav/nav';
import Banner from '../Nav/banner';
import Footer from '../Footer/footer';

const CreateArticle = () =>{
    return(
        <>
        <Nav/>
        <Banner/>
        <div className="container">
            <div className="row">                
                <div className="col-md-6 offset-3">
                <form action="" method="post" encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="">Enter Title</label>
                        <input type="text" name="title" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Choose Category</label>
                        <select name="category" id="" className="form-control">
                            <option value="1">React JS</option>
                            <option value="1">Laravel JS</option>
                            <option value="1">Vue JS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Enter Description</label>
                            <textarea 
                            name="description" 
                            id="" 
                            cols="30" 
                            rows="10"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Choose Image</label>
                            <input type="file" name="image" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Create Artice
                    </button>
                    </form>
                </div>                
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default CreateArticle;