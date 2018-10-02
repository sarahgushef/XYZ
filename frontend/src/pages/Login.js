import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


import {userID} from '../actions/index';

class Login extends Component{
    constructor(){
        super();
        this.state={
            redirectToProfile: false
        }
    }


    klikLogin(){
        var urlLogin = 'http://localhost:3210/login';
        var userData = {
            userEmail : this.refs.email.value,
            userPassword: this.refs.kataSandi.value
        }

        axios.post(urlLogin, userData)
            .then((hasil) => {
                console.log(hasil.data[0].userID)
                

            if (hasil.data[0].userID > 0){
                this.setState({redirectToProfile : true})
                this.props.userID(hasil.data[0].userID)
                
                
            }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    //==============================================================
    render(){
        if(this.state.redirectToProfile === true){
            return(<Redirect to='/WritingArea'/>)
        }

        return(
            
            <div className="container text-center">

                {/* <form> */}
                    <h3> Please Login</h3>

                    
                    <input type="email" className="form-control" placeholder="Email Address" ref="email" required=""/>
                    <input type="password" className="form-control" placeholder="Password" ref="kataSandi" required=""/>

                    <button className="btn btn-primary" type="submit" onClick={() => this.klikLogin()}> 
                        Login
                    </button>

                    <p> Don't have an account? <Link to="/Register"> Register here </Link></p>
                {/* </form> */}





</div>
            
        )
    }
}
export default connect(null, {userID})(Login);