import React, { Component } from 'react';
import API from './Api';

class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            commentList: []
        }
    }

    getSinglePostData=()=>{
        const postId = this.props.match.params.id;
        API.get(`/posts/${postId}`)
        .then((response)=>{
            const {title,body} = response.data;
            this.setState({title, body})
        })
        //API.get(`/posts/${postId}/comments`)
        API.get(`/comments?postId${postId}`)
        .then((response)=>{
            const commentList = response.data
            this.setState({commentList})
        })
    }
    
    componentDidMount() {
        this.getSinglePostData();

    }
    render(){
        const {commentList,title,body} = this.state
        console.log(this.state.commentList)
        return(
            <>  
                <div style={styles.blogWrapper}>
                    <h1 style={styles.title}>{title}</h1>
                    <p style={styles.description}>{body}</p>
                </div>
                <ul style={styles.listWRapper}>
                    {commentList.map((comment, commentId)=>{
                        const {name, email,body} = comment;
                        return (
                            <li style={styles.listItem} key={commentId}>
                                <h5 style={styles.commentTitle}>{name}</h5>
                                <h6 style={styles.author}>{email}</h6>
                                <p style={styles.comment}>{body}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

const styles = {
    blogWrapper:{
        marginBottom: 50
    },title:{
        fontSize: 32,
        color: '#111',
        marginTop: 0,
        marginBottom: 15,
        textTransform: 'capitalize'
    },description:{
        fontSize: 16,
        color: '#555',
        lineHeight: 'normal',
    },listWRapper:{
        listStyle:'none',
        padding: 0,
        margin: 0
    },listItem:{
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15
    },commentTitle:{
        fontSize: 22,
        textTransform: 'capitalize',
        color: '333',
    },author:{
        fontSize: 12,
        color: 'grey'
    },comment:{
        fontSize: 16,
        color: '#333',
        lineHeight: 'normal'
    }
}

export default PostDetail;
