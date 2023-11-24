
import { Link } from 'react-router-dom';
import MenuItem from '../../Component/ShareComponnet/MenuItem';
import img1 from '../../assets/logo.png'
import useAuth from '../../Hook/useAuth';
import img from '../../assets/profile.png'
import toast from 'react-hot-toast';

const Navbar = ({ Children }) => {
    const { user, logOut } = useAuth()
    const handleform = () => {
        logOut()
        toast.success("successfully LogOut")
    }
    console.log(user)
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  w-full bg-white z-10 shadow-md opacity-100 flex flex-col border-b-[1px]">
                {/* Navbar */}
                <div className="navbar  max-w-7xl mx-auto">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <div>
                            <p className="text-3xl text-bold uppercase  ">BISTRO BOSS</p>
                            <p className="tracking-[.55em] uppercase ">Restaurant</p>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu uppercase flex gap-3 items-center menu-horizontal text-white">
                            {/* Navbar menu content here */}
                            <MenuItem address={'/'} label={'Home'}></MenuItem>
                            <MenuItem address='/dashboard' label='DashBoard'></MenuItem>
                            <MenuItem address='/contact' label="Contact"></MenuItem>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user ? <img alt="Tailwind CSS Navbar component" src={user?.photoURL} /> :
                                                <img alt="Tailwind CSS Navbar component" src={img} />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 text-black shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                    <li><Link className='text-xl' to={'/registration'}> Registration</Link></li>
                                    {
                                        user ? <li><Link onClick={handleform} className='text-xl mt-2' >LogOut</Link></li> :
                                            <li><Link className='text-xl mt-2' to={'/login'}>Login</Link></li>
                                    }
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {Children}
            </div>

            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu flex flex-col items-center  uppercase w-1/2  min-h-full bg-base-100 text-black hite text-xl">
                    {/* Sidebar content here */}
                    <MenuItem address='/' label='Home'></MenuItem>
                    <MenuItem address='dashboard' label={'DashBoard'} ></MenuItem>
                    <MenuItem address='contact' label="Contact"></MenuItem>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user ? <img alt="Tailwind CSS Navbar component" src={user?.photoURL} /> :
                                        <img alt="Tailwind CSS Navbar component" src={img} />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 ml-20 z-[1] p-2 text-black shadow menu  dropdown-content bg-base-100 rounded-box w-44">

                            <li><Link className='ml-10' to={'/registration'}> Registration</Link></li>
                            {
                                user ? <li><Link className='ml-10 mt-2' >LogOut</Link></li> :
                                    <li><Link className='ml-10 mt-2' to={'/login'}>Login</Link></li>
                            }
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;