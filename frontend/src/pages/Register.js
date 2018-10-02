import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super();
        this.state={
            hasilRegister: {} 
        }
    }

    klikRegister(){
        var urlRegister = 'http://localhost:3210/register';
        var userData = {
            userID : null,
            userName : this.refs.nama.value,
            userEmail : this.refs.email.value,
            userPassword : this.refs.kataSandi.value,
            userRegistrationDate : new Date()
        };
        
        axios.post(urlRegister, userData)
            .then((hasil) => {
                // console.log(hasil.status)
                alert('Your registration is succes')
                this.setState({
                    hasilRegister: hasil.status
                })
                
            })
            .catch((error) => {
                // console.log(error)
                alert('Registration error')
            })

    }


    //======================================================
    render(){
        if(this.state.hasilRegister === 200){
            return(<Redirect to='/Login'/>)
        }

        



        //================= default return dari create-react-app ===============
        return(
            <div className="container text-center">

                

                {/* <form> */}
                    <h3> Please Sign Up</h3>

                    <input type="text" className="form-control" placeholder="Name" ref="nama" required=""/>
                    <input type="email" className="form-control" placeholder="Email Address" ref="email" required=""/>
                    <input type="password" className="form-control" placeholder="Password" ref="kataSandi" required=""/>

                    <button className="btn btn-primary" type="submit" onClick={() => this.klikRegister()}> 
                        Register 
                    </button>

                    <p> Have an account? <Link to="/Login"> Login here </Link></p>
                {/* </form> */}
                
                
                
                
                
            </div>
        )
    }
}
export default Register;