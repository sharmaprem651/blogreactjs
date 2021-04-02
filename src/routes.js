import React from 'react';
import { render } from '@testing-library/react';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const AddPost = React.lazy(() => import('./AddPost'));
const EditPost = React.lazy(()=>import('./EditPost'));
const PostDetail = React.lazy(()=>import('./PostDetail'));
const UserPosts = React.lazy(()=> import('./UserPosts'));
const UserPostsDetail = React.lazy(()=> import('./UserPostsDetail'));

const routes = [
    {path: '/', exact: true, name: 'Home'},
    {path: '/about-us', name: 'About'},
    {path: '/post/:id', exact: true, name: 'Post Detail'},
    {path: '/user-posts/:id', name: 'User Posts'},
    {Path: '/add-new-post', name: 'Add Post'},
    {Path: '/edit-post/:id', name: 'Post Edit'},
    {Path: '/user-post-detail/:id', name: 'User Post Detail'}
]

export default routes;