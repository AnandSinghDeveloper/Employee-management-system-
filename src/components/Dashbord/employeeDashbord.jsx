import Header from "../Others/Header"
import TaskListNumber from "../Others/TaskListNumber"
import TaskList from "../Tasklist/TaskList"


const EmployeeDashbord = () => {
  return (
    <div className=" p-10 bg-[#1c1c1c] min-h-screen overflow-auto  ">
     <Header/>
     <TaskListNumber/>
     <TaskList/>
    </div>
  )
}

export default EmployeeDashbord
