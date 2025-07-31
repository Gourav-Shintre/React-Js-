import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to='/' className={(obj)=>obj.isActive? 'isActive' : null}>Home</NavLink>
            <li>
              {" "}
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to='/posts'>Post</NavLink>
            </li>
          </li>
        </ul>
        <main>
          <Outlet />
        </main>
      </nav>
    </div>
  );
};

export default AdminLayout;
