import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogRequestApi from './RestClient/BlogRequestApi'
import {Row,Col,Card,Button} from 'react-bootstrap'

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            prev: 5,
            timepass: false,
            allPosts: [],
            allUser: []
        }
    }

    deletePost=(id)=>{
        BlogRequestApi.deletePost(id).then((post)=>{console.log(post)})
    }

    componentDidMount(){
        BlogRequestApi.getPostData().then((allPosts)=>{this.setState({allPosts})})
        BlogRequestApi.getAuthorDetail().then((allUser)=>{this.setState({allUser})})
    }

    loadMoreHandler=()=>{
        this.setState({prev: this.state.prev + 5 })
    }

    render() {
        const {allPosts, allUser} =  this.state
        console.log(allUser)
        return (
            <React.Fragment>
                    <Row>
                        <Col sm={9}>
                            {allPosts.slice(0,this.state.prev).map((item)=>{
                                const val = item.title.length > 30 ? '...' : '';
                                const title = item.title.toUpperCase().substr(0,30) + val;
                                const desc = item.body.substr(0,150) +'...';
                                return(   
              

                                    <Card key={item.id} className={'infoWrapper mb-3'}>
                                        <Card.Body>
                                            <Card.Title><Link to={'/post/'+item.id}>{ title}</Link></Card.Title>  
                                            <Card.Text>{desc}</Card.Text>    
                                            <Button href={`/edit-post/${item.id}`} variant="primary" size="sm">Edit Post</Button>{' '}
                                            <Button  id={item.id}  onClick={()=>this.deletePost(item.id)} variant="danger" size="sm">Delete Post</Button>
                                        </Card.Body>
                                    </Card>     
                                    
                                ) 
                            })}
                            <div className={'mt-5 mb-5 d-flex justify-content-center'}>
                                <Button onClick={this.loadMoreHandler} variant="success" size={'lg'}>Load More</Button>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <Card>
                            <Card.Header>Post By Author</Card.Header>
                            <Card.Body>
                                {allUser.map((item,id)=>{
                                    return <Button key={id} variant="link" href={`/user-posts/${item.id}`} size={'sm'}>{item.name}</Button>
                                })}
                            </Card.Body>
                            </Card>                            
                        </Col>
                    </Row>
            </React.Fragment>
        )
    }
}


export default Home;
