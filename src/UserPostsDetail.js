import React, { Component } from 'react';
import BlogRequestApi from './RestClient/BlogRequestApi'

class UserPostsDetail extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            body:''
        }
    }

    componentDidMount(){
        let id =  this.props.match.params.id;
        BlogRequestApi.getUserPostDetail(id).then((singlePost)=> {
            const {title, body} = singlePost[0]
            this.setState({title,body})
        })
    }

    render(){
        const {title, body} =  this.state;
        return(
            <>
                <h1>{title}</h1>
                <p>{body}</p>
            </>
        )
    }
}    

export default UserPostsDetail