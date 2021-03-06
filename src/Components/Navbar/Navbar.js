import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const pages = [
        {page: 'Home', id:1, link: "/"},
        {page: 'About', id:1, link: "/"},
        {page: 'Courses', id:1, link: "/"},
        {page: 'Contact', id:1, link: "/"},
        {page: 'Blogs', id:1, link: "/"},
        {page: 'Free Content', id:1, link: "/"},
        {page: 'Student Dashboard', id:1, link: "/studentDashboard"},
        {page: 'Teacher Dashboard', id:1, link: "/teacherDashboard"},
        {page: 'Admin Dashboard', id:1, link: "/adminDashboard"},
    ]

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
                <div className=" flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex">
                        <img
                            src="./img/YIE Logo PNG 1.png"
                            className="mr-4 w-9"
                            alt="YIE-Logo"
                        />
                        <span className="self-center hidden sm:block text-lg text-blue-800 font-bold whitespace-nowrap dark:text-white">
                            YIE-SCHOOL
                        </span>
                    </a>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            className="py-1.5 px-4 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Sign Up
                        </button>
                        <button
                            data-collapse-toggle="mobile-menu-4"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-4"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="mobile-menu-4"
                    >
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {
                                pages.map(page => (
                                    <li key={page.id}>
                                <Link
                                    to={page.link}
                                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    {page.page}
                                </Link>
                            </li>
                                ))
                            }
                            
                   
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
