import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    const allLinks = <>

        <li><Link to="/" className='text-lg font-semibold'>Home</Link></li>
        <li><Link to="/listedBooks" className='text-lg font-semibold'>Listed Books</Link></li>
        <li><Link to="/pageToRead" className='text-lg font-semibold'>Page to Read</Link></li>
    </>

    return (
        <>

            <header className='sticky top-0 z-20 backdrop-blur-xl bg-transparent py-2'>
                <div className="container mx-auto navbar  ">
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
                                {
                                    allLinks
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                allLinks
                            }
                        </ul>
                    </div>
                    <div className="navbar-end gap-2 ">
                        <a className="btn bg-[#23BE0A] bg-opacity-35 px-3 md:px-5">Sign In</a>
                        <a className="btn bg-[#59C6D2] bg-opacity-35 px-3 md:px-5">Sign Up</a>
                    </div>
                </div>
            </header>

        </>
    )
}
