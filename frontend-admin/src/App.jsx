
import "./index.css"
import Sidebar from "./Components/Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import ManageUsers from "./Components/ManageUsers/ManageUsers"
import ManageCourses from "./Components/ManageCourses/ManageCourses"
import Analytics from "./Components/Analytics/Analytics"
import Settings from "./Components/Settings/Settings"
import ManageAssignment from "./Components/Manage Assignment/ManageAssignment"


const App = () => {
  return (
   <>

        <Sidebar />
       
       <Routes >
            <Route path= "/" element={< Dashboard />} /> 
            <Route path= "/manage-users" element={< ManageUsers />} /> 
            <Route path ="/manage-courses" element={< ManageCourses />} />
            <Route path ="/manage-assignments" element={< ManageAssignment />} />
            <Route path ="/analytics" element={< Analytics />} />
            <Route path ="/settings" element={< Settings />} />
            

       </Routes>
   </>
  )
}

export default App
