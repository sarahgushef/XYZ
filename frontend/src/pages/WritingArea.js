import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// import {userID} from '../actions/index'

class WritingArea extends Component{
    constructor(){
        super();
        this.state ={
            userID: 0
        }
    }

    componentWillMount(){
        var urlUserProfile = `http://localhost:3210/user/${this.props.id}`;

        axios.get(urlUserProfile)
        .then((x)=> {
            console.log(x)

            

           
        })
    }

    klikPostArticle(){
        var urlPostArticle = 'http://localhost:3210/postArticle';
        var postData = {
            articleID : null,
            userID: this.props.id,
            articleContent: this.refs.article.value
        }
        axios.post(urlPostArticle, postData)
        .then((result) => {
            console.log(result);
            alert('Artikel sukses diinput')
        }).catch((error) => {
            console.log(error);
        })
    }
   

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1"  ref="article" rows="10"></textarea>

                        <button className="btn btn-primary" type="submit" onClick={() => this.klikPostArticle()}> 
                            Post
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    const id = state.idUser

    return{id}
}

export default connect(mapStateToProps)(WritingArea);