import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-4xl">
        <NavLink
          to="/"
          className="flex items-center self-center font-bold hover:text-blue-700 text-white"
        >
          TGH
        </NavLink>

        <div className="flex justify-between h-20 lg:px-30 px-4 items-center text-white">
          <NavLink
            to="/"
            className=" mr-7 text-gray-900 rounded  hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white  :hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/bookmark"
            className="text-gray-900 rounded  hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white  :hover:text-white"
          >
            Bookmark
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
