import React, { Component } from 'react';
import BlogRequestApi from './RestClient/BlogRequestApi'
import {Row,Col,Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

class UserPosts extends Component {
    constructor(){
        super()
        this.state = {
            userPosts: []
        }
    }

    componentDidMount(){
        console.log(this.props)
        let userID =  this.props.match.params.id;
        BlogRequestApi.getPostsByUser(userID).then((userPosts)=>{this.setState({userPosts})})
    }

    render(){
    const {userPosts} = this.state;    
        return(
            <>

                {userPosts.map((posts,id)=>{
                    return(
                    <Card className={'infoWrapper mb-3'} key={id}>
                        <Card.Body>
                            <Card.Title className="text-capitalize"><Link to={`/user-post-detail/${posts.id}`}>{posts.title}</Link></Card.Title>  
                            <Card.Text>{posts.body}</Card.Text>
                        </Card.Body>
                    </Card>                               
                    )
                })}
            </>
        )
    }
}    

export default UserPosts