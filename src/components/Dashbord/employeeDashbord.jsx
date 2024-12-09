import Header from "../Others/Header"
import TaskListNumber from "../Others/TaskListNumber"
import TaskList from "../Tasklist/TaskList"


const EmployeeDashbord = (props) => {
  // console.log(UserData);
  
  return (
    <div className=" p-10 bg-[#1c1c1c] min-h-screen overflow-auto  ">
     <Header changeUser={props.changeUser} UserData={props.UserData} />
     <TaskListNumber  UserData={props.UserData}  />
     <TaskList  UserData={props.UserData}  />
    </div>
  )
}

export default EmployeeDashbord
