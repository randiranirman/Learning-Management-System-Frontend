
import "./Sidebar.css";
import { useState } from "react";
const Sidebar = () => {

    const [ active , setActive ] = useState('dashboard');


  return (
    

    <>
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <h2>This is the second commit</h2>
                <ul>
                    <li className="dashboard" onClick={ ()  => setActive("dashboard")}>DashBoard</li>
                    <li className="manage users" onClick={() => setActive("manage users")} >Manage Users</li>
                    <li className="manage assignments"  onClick={() => setActive("manage assignments")}> Manage Assignments</li>
                    <li className="manage courses" onClick={() => setActive("manage courses")} >Manage Courses</li>
                    <li className="analytics" onClick={() => setActive("analytics")}>Analytics</li>
                    <li className="settings"onClick={() => setActive("settings")} >Settings</li>
                    <li className="log out"onClick={() => setActive("log out")} >Log Out</li>
                </ul>
            </div>


    </>
  )
}

export default Sidebar
