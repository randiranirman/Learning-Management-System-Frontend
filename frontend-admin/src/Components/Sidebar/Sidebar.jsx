import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
   


  return (
    

    <>
            <div className="sidebar">
                
                <ul>
                    <Link to={'/'}><li className="dashboard" >Dashboard</li></Link>
                    <Link to={'/manage-users'}><li className="manage-users" >Manage Users</li></Link>
                    <Link to={'/manage-courses'}><li className="manage-courses" >Manage Courses</li></Link>
                    <Link to={'/manage-assignments'}><li className="manage-assignments" >Manage Assignments</li></Link>
                    <Link to={'/analytics'}><li className="analytics" >Analytics</li></Link>
                    <Link to={'/settings'}><li className="settings" >Settings</li></Link>
                    <li  className="log out" >Log Out</li>
                </ul>
            </div>


    </>
  )
}

export default Sidebar
