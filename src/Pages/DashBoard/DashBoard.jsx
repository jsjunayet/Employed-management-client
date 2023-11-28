import { Outlet } from "react-router-dom";
import Sliderber from "./Sliderber";


const DashBoard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            {/* Sidebar Component */}
            <Sliderber></Sliderber>
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>{/* Outlet for dynamic contents */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;