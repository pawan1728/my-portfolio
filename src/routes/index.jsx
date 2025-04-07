import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import About from '../page/About';
import Project from '../page/Project';
import Contact from '../page/Contact';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/project', element: <Project /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

