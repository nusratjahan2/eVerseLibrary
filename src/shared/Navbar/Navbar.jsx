import React from 'react'
import Dropdown from './UserDropdown'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const Navbar = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-[#b3cde0] border px-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className='gap-0 text-2xl font-bold'><span className='italic'>e</span>Verse<span className='text-[#03396c]'>Library</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <Link to='/' className='mr-5 font-semibold text-xl'>Home</Link>
                        <Link to='/aboutUs' className='mr-5 font-semibold text-xl'>About Us</Link>
                        <Link to='/blogs' className='mr-5 font-semibold text-xl'>Blog</Link>
                        <Link to='/contactUs' className='mr-5 font-semibold text-xl'>Contact Us</Link>
                        <li>
                            <details>
                                <summary className='font-semibold text-xl'>Category</summary>
                                <ul className="p-2 z-10">
                                    <li><Link to='/banglaBooks'>Bangla Books</Link></li>
                                    <li><Link to='/englishBooks'>English Books</Link></li>
                                    <li><Link to='/researchPapers'>Research Papers</Link></li>
                                    <li><Link to='/documentation'>Documentation</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <Dropdown></Dropdown>:
                            <Link to='/login' className='btn font-semibold text-xl'>Login</Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar