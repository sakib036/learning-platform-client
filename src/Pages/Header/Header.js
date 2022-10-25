import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Images/3778120.png'
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useState } from 'react';


const Header = () => {
    const [displayName, setDisplayName]=useState(false);
    const handleMouseOver=()=>{
        setDisplayName(true)
    };
    const handleMouseOut=()=>{
        setDisplayName(false)
    };

    const { user, logOut } = useContext(AuthContext);
  

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar  bg-gray-500 text-white d-flex justify-evenly">
                <div className="navbar-start">
                    <div>
                    <img className='w-16' src={logo} alt="" />
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-200 rounded-box w-52">
                            <li className='bg-gray-500'><NavLink to='/home'>Home</NavLink></li>
                            <li className='bg-gray-500'><NavLink to='/courses'>Courses</NavLink></li>
                            <li className='bg-gray-500'><NavLink to='/blog'>Blog</NavLink></li>
                            <li className='bg-gray-500'><NavLink to='/faq'>FAQ</NavLink></li>
                            <li className='bg-gray-500'><NavLink to='/register'>Register</NavLink></li>
                            <li className='bg-gray-500'>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{displayName&& user?.displayName}</span>
                                        <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> {user?.photoURL ?
                                            <img
                                                style={{ height: '30px' }}
                                                roundedCircle
                                                src={user?.photoURL} alt=''>
                                            </img>
                                            : <FaUser></FaUser>
                                        }</span>
                                        <button onClick={handleLogOut} className="btn btn-active btn-primary">LogOut</button>
                                    
                                    </>
                                    :
                                    <>
                                        <NavLink to='/login'>Login</NavLink>
                                       
                                    </>
                            }


                        </>
                        </li>
                        </ul>
                    </div>
                    
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">TOP-<span className='text-xl font-bold'>TechEdu</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/courses'>Courses</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/faq'>FAQ</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        <li>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{displayName&& user?.displayName}</span>
                                        <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> {user?.photoURL ?
                                            <img
                                                style={{ height: '30px' }}
                                                roundedCircle
                                                src={user?.photoURL} alt=''>
                                            </img>
                                            : <FaUser></FaUser>
                                        }</span>
                                        <button onClick={handleLogOut} className="btn btn-active btn-primary">LogOut</button>
                                    
                                    </>
                                    :
                                    <>
                                        <NavLink to='/login'>Login</NavLink>
                                       
                                    </>
                            }


                        </>
                        </li>






                      
                    </ul>
                </div>
                
            </div>

        </div>
    );
};

export default Header;