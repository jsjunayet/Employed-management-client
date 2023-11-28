
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';

import Contact from '../Pages/Contact/Contact';
import MainLayout from './MainLayout/MainLayout';
import Login from '../Authentication/Login';
import Resistration from '../Authentication/Resistration';
import DashBoard from '../Pages/DashBoard/DashBoard';
import Setting from '../Pages/DashBoard/Setting';
import EmployeeList from '../Pages/DashBoard/HR/EmployeeList';
import Progress from '../Pages/DashBoard/HR/Progress';
import PaymentHistory from '../Pages/DashBoard/Employee/PaymentHistory';
import Workshit from '../Pages/DashBoard/Employee/Workshit';
import AllEmployeeList from '../Pages/DashBoard/Admin/AllEmployeeList';
import DetailsPage from '../Pages/DashBoard/HR/DetailsPage';
import Private from '../Component/ShareComponnet/Private';
import AdminRoute from '../Pages/DashBoard/Admin/AdminRoute';
import RouteHR from '../Pages/DashBoard/HR/RouteHR';
import RouteEmployee from '../Pages/DashBoard/Employee/RouteEmployee';

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
    {
        path: '/dashboard',
        element: <Private><DashBoard></DashBoard></Private>,
        children:
            [
                // HR
                {
                    path: 'employeelist',
                    element: <Private><RouteHR><EmployeeList></EmployeeList></RouteHR></Private>
                },
                {
                    path: 'employeelist/details/:id',
                    element: <Private><RouteHR><DetailsPage></DetailsPage></RouteHR></Private>,
                    loader: ({ params }) => fetch(`http://localhost:5000/employeelist/details/${params.id}`)


                },
                {
                    path: 'progress',
                    element: <Private><RouteHR><Progress></Progress></RouteHR></Private>
                },
                // employee
                {
                    path: 'paymentHistory',
                    element: <Private><RouteEmployee><PaymentHistory></PaymentHistory></RouteEmployee></Private>
                },
                {
                    path: 'workshit',
                    element: <Private><RouteEmployee><Workshit></Workshit></RouteEmployee></Private>
                },
                // admin
                {
                    path: 'allemployeelist',
                    element: <Private><AdminRoute><AllEmployeeList></AllEmployeeList></AdminRoute></Private>
                }
            ]
    },






])



export default Router;