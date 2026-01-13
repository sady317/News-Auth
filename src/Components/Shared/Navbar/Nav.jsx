import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

function Nav() {
  const {  user ,handleLogOut } = useContext(AuthContext);
  // console.log(user)

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex  justify-between">
        <div className="">
          <a className="btn btn-ghost lg:text-xl md:text-xl text-lg">
            News Auth
          </a>
        </div>

        <div className="lg:gap-6 gap-2 md:gap-4 flex items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-gray-600 text-white text-center px-4 py-2 rounded-sm"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-gray-600 text-white text-center px-4 py-2 rounded-sm"
                : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-gray-600 text-white text-center px-4 py-2 rounded-sm"
                : ""
            }
          >
            Career
          </NavLink>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              >
              <div className="w-10 rounded-full">
                {user ? 
             
             <>
                
                
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                    />
           
                    </>
                  
                  : (
                    <img 
                    
                    alt="Tailwind CSS Navbar component"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfV3VLY8mFP3iUzsEtjM1XCAaxjwmXno9PWA&s"
                    />
                  )}
              </div>
            </div>
                  <p>{user?.displayName}</p>

            <div>
              {user ? (
                <button onClick={()=>handleLogOut()} className="btn btn-warning px-6 text-black text-sm">
                  Logout
                </button>
              ) : (
             <>
             <Link to={"/login"}>
             
                <button className="btn btn-warning px-6 text-black text-sm">
                  Login
                </button>
             </Link>
             </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
