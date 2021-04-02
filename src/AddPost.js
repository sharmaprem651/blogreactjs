import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './Api';

class AddPost extends Component {

    constructor(props){
        super(props)
        this.state = {
            userID: null,
            title: '',
            description:''

        }
    }

    onChangeHandler=(e)=>{
        let getname = e.target.name
        let getvalue = e.target.value
        this.setState({[getname]:getvalue})
        console.log(getname,getvalue)

    }

    handleFormSubmit=(e)=>{
        e.preventDefault();
        API.post('/posts', this.state)
        .then((response)=>{
            console.log(response.data)
        })

    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>User Id</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Id" name="userID" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" name="title" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter Description" name="description" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="Save">
                        Submit
                     </Button>                    
                </Form>

            </>
        )
    }
}

export default AddPost