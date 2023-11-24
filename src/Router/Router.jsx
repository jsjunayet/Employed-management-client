
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import DashBoard from '../Pages/DashBoard/DashBoard';
import Contact from '../Pages/Contact/Contact';
import MainLayout from './MainLayout/MainLayout';
import Login from '../Authentication/Login';
import Resistration from '../Authentication/Resistration';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/registration',
                element: <Resistration></Resistration>
            }
        ]
    },


])



export default Router;