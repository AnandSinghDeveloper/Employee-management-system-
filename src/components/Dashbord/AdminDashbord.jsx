import CreateTask from "../Others/CreateTask"
import Header from "../Others/Header"
import AllTask from "../Tasklist/AllTask"

function AdminDashbord() {
  return (
    <div className=" h-screen w-full p-7">
     <Header  />
     <CreateTask/>
     <AllTask/>
    
    </div>
  )
}

export default AdminDashbord
