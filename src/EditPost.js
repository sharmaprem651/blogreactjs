import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './Api';

class EditPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            postData: [],
            title: '',
            description:'',
            postId : this.props.match.params.id
        }
    }
    

    getSinglePostDetail=()=>{
        //console.log('getPostID',postId)
        API.get(`/posts/${this.state.postId}`)
        .then((response)=>{
            this.setState({postData: response.data})
            //console.log(response.data)
        })
    }
    componentDidMount(){
        this.getSinglePostDetail();
    }

    onChangeHandler=(e)=> {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormEdit=(e)=> {
        e.preventDefault();
        API.put(`/posts/${this.state.postId}`, this.state)
        .then((response)=>{
            //console.log(response.data)
            const {title, description} = response.data
            console.log('Title',title)
            console.log('Description',description)
        })
    }


    render() {
        const {title, body} = this.state.postData
        return(
            <React.Fragment>
              <Form onSubmit={this.handleFormEdit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" name="title" defaultValue={title} onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter Description" defaultValue={body} name="description" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                     </Button>
                     <Button href="/" variant="danger" type="button">
                        Cancel
                     </Button>                     
                </Form>                    
            </React.Fragment>
        )
    }
}

export default EditPost;