import AddNote from '../components/pages/AddNote/AddNote';
import Home from '../components/pages/Home/HomePage';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/add',
    component: AddNote,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
];

export default routes;
