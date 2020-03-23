import React,{Component} from 'react';
import Nav from '../Nav/nav';
import Banner from '../Nav/banner';
import Footer from '../Footer/footer';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
class Register extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
            <Nav/>
            <Banner/>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-1">
                        <div className="card">
                            <div className="card-header">
                            <h1>Register</h1>
                            </div>
                            <div className="card-body">
                                <form action="">
                                <label htmlFor="">
                                        Username
                                    </label>
                                    <input type="text" 
                                    className="form-control" 
                                    name="username"/>

                                    <label htmlFor="">
                                        Enter Email
                                    </label>
                                    <input type="text" 
                                    className="form-control" 
                                    name="email"/>

                                    <label htmlFor="">
                                        Enter Password
                                    </label>
                                    <input type="password" 
                                    className="form-control" 
                                    name="password"/>
                                    <button type="submit" className="btn btn-success"> Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        );
    }
}
export default Register;