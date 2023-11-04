import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Theme from "./Theme";
import useAuth from "../hooks/useAuth";

const MainLayout = ({ children }) => {
  const { user, logOutUser } = useAuth();
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar border-b-4 ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              <div className=" flex items-center gap-5">
                {/* Navbar menu content here */}
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-accent btn-sm"
                      : "btn btn-ghost btn-sm btn-active"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-accent btn-sm"
                      : "btn btn-ghost btn-sm btn-active"
                  }
                >
                  About
                </NavLink>
                <Theme />
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} />
                      ) : (
                        <img
                          className=""
                          src={"https://i.ibb.co/hDN4yRb/296-2969961-no-image-user-profile-icon.jpg"}
                        />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-500 py-5 space-y-1  text-white rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between text-xl">
                        {user?.displayName ? user?.displayName : <p>Profile</p>}
                      </a>
                    </li>
                    <li>
                      <Link className="text-lg" to={"/register"}>
                        Register
                      </Link>
                    </li>
                    <li>
                      {user ? (
                        <button
                          className="text-lg"
                          onClick={() => logOutUser()}
                        >
                          Logout
                        </button>
                      ) : (
                        <Link className="text-lg" to={"/login"}>
                          <button>Login</button>
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" lg:hidden">
              <Theme />
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-20 rounded-full">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img
                        className=""
                        src={"https://i.ibb.co/hDN4yRb/296-2969961-no-image-user-profile-icon.jpg"}
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-500 py-5 space-y-1  text-white rounded-box w-52"
                >
                  <li>
                    <a className="justify-between text-xl">
                      {user?.displayName ? user?.displayName : <p>Profile</p>}
                    </a>
                  </li>
                  <li>
                    <Link className="text-lg" to={"/register"}>
                      Register
                    </Link>
                  </li>
                  <li>
                    {user ? (
                      <button className="text-lg" onClick={() => logOutUser()}>
                        Logout
                      </button>
                    ) : (
                      <Link className="text-lg" to={"/login"}>
                        <button>Login</button>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu  space-y-5 mt-[70px] ml-1 w-72 ">
            {/* Sidebar menu content here */}
            <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-accent "
                      : "btn btn-ghost  btn-active"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-accent "
                      : "btn btn-ghost  btn-active"
                  }
                >
                  About
                </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
