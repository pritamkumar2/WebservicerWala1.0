import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";
const AdminLayout = () => {

  const { user ,isLoading} = useAuth();
  if(isLoading){
    return<h1 className="bg-slate-700  h-lvh">loading.....</h1>
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className=" mt-16 adminLayout bg-black">
        <div className="adminBox1 pt-24">
          <div>
            <header>
              <nav>
                <ol className="adminbuttons">
                  <li>
                    <NavLink className="adminLink" to="/admin/users">
                      users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="adminLink" to="/admin/contacts">
                      contacts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="adminLink" to="/admin/service">
                      service
                    </NavLink>
                  </li>
                </ol>
              </nav>
            </header>
          </div>
        </div>
        <div className="adminBox2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
