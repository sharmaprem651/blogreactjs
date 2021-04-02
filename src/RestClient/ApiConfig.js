const Root = (url) => `https://jsonplaceholder.typicode.com/${url}`

class Api {
    static all_posts = Root(`posts`)
    static delete_post =(id)=> Root(`posts/${id}`)
    static authorDetails = Root(`users`)
    static postByUser =(id)=> Root(`posts?userId=${id}`)
    static userPostDetail = (id) => Root(`posts?id=${id}`)
}

export default Api