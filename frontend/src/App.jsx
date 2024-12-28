
import "./index.css"
import Dashboard from "./Components/Dashboard/Dashboard"
import Sidebar from "./Components/Sidebar/Sidebar"

const App = () => {
  return (
   <>
      <h2 className="text-4xl font-bold underline">Hello World </h2>
        <Sidebar />
        <Dashboard />
   </>
  )
}

export default App
