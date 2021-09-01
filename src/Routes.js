import Comments from './components/Comments';
import Dashboard from './components/Dashboard';
import Posts from './components/Posts';

const Routes = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/PostsDetail/:id",
    component: Posts,
    exact: true
  },
  {
    path: "/CommentsDetails/:id",
    component: Comments,
    exact: true
  }
];

export default Routes;
