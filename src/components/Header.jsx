import { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-8 lg:px-40 py-4 font-jost border-b border-gray-200">
        <div className="flex gap-2 itenms-center">
          <button className="lg:hidden" onClick={() => setActive(!isActive)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <h2 className="text-2xl font-bold ">HengKhema</h2>
        </div>

        <ul className="hidden  lg:flex gap-4">
          <li>
            <NavLink
              to="/"
              className="hover:underline decoration-yellow-600 aria-[current=page]:underline"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="hover:underline decoration-yellow-600  aria-[current=page]:underline"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:underline decoration-yellow-600 aria-[current=page]:underline"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:underline decoration-yellow-600 aria-[current=page]:underline"
            >
              About
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-yellow-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-yellow-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-yellow-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </header>
      <header
        className={`${
          isActive ? " -left-0" : "-left-full"
        } absolute top-0  z-10 p-4 bg-primary text-white min-h-screen w-[260px] transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end py-4">
          <button
            className="hover:text-yellow-600"
            onClick={() => setActive(!isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <NavLink
            to="/"
            className="hover:bg-gray-700 p-2 rounded-lg aria-[current=page]:underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className="hover:bg-gray-700 p-2 rounded-lg aria-[current=page]:underline"
          >
            Product
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:bg-gray-700 p-2 rounded-lg aria-[current=page]:underline"
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="hover:bg-gray-700 p-2 rounded-lg aria-[current=page]:underline"
          >
            About
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
