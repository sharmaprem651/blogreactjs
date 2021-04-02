import React from 'react';
import {Container} from 'react-bootstrap'
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import PostDetail from './PostDetail';
import UserPosts from './UserPosts'
import AddPost from './AddPost'
import EditPost from './EditPost'
import UserPostsDetail from './UserPostsDetail'
 
const NavRoute=()=>{

    return(
            <Container className={'mt-5'}>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about-us'} component={About}/>
                <Route path={'/post/:id'} render={(props)=><PostDetail {...props}/> }/>
                <Route path={'/user-posts/:id'} render={(props)=><UserPosts {...props}/>}/>
                <Route path={'/add-new-post'} component={AddPost}/>
                <Route path={'/edit-post/:id'} render={(props)=><EditPost {...props} />}/>
                <Route path={'/user-post-detail/:id'} render={(props)=><UserPostsDetail {...props}/>} /> 
            </Switch>
            </Container>
    )
}

export default NavRoute;
