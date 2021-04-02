import axios from 'axios';
import Api from './ApiConfig';

class BlogRequestApi {
    static getPostData(){
        let response = axios.get(Api.all_posts)
        .then((response)=>response.data)
        return response
    }
    static deletePost(id){
        let response = axios.delete(Api.delete_post(id))
        .then((response)=>response)
        return response
    }
    static getAuthorDetail(){
        let response =  axios.get(Api.authorDetails)
        .then((response)=>response.data)
        return response
    }
    static getPostsByUser(id){
        let response =  axios.get(Api.postByUser(id))
        .then((response)=>response.data)
        return response
    }
    static getUserPostDetail(id) {
        let response = axios.get(Api.userPostDetail(id))
        .then((response)=> response.data)
        return response
    }
}

export default BlogRequestApi