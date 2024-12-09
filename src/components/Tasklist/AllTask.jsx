import { useContext } from "react"
import { AuthContextProvider } from "../../context/Authcontext"


const AllTask = () => {
     const authData= useContext(AuthContextProvider)
    //  console.log(authData.EmployeesData);
     
           
  return (
    <div id="tasklist" className=" bg-[#1c1c1c] rounded  p-5 mt-5" >
      <div className=" bg-red-400 mb-3 py-2 px-4 flex justify-between rounded">
          <h2 className=" text-lg font-medium  w-1/5 ">Employee Name</h2>
          <h3 className=" text-lg font-medium  w-1/5">New Task</h3>
          <h5 className=" text-lg font-medium  w-1/5">Active Task</h5>
          <h5 className=" text-lg font-medium  w-1/5">Completed Task</h5>
          <h5 className=" text-lg font-medium  w-1/5"> Failed Task</h5>
      </div>
          

       <div id="tasklist" className=" overflow-auto h-48  ">
       {
        authData.EmployeesData.map((elm ,idx)=>{
          return  <div key={idx} className=" border-2 border-emerald-500 mb-2 py-2 flex justify-between rounded px-4">
          <h2 className= "w-1/5 text-lg font-medium " >{elm.firstName}</h2>
          <h3 className="w-1/5 text-lg font-medium  text-blue-500">{elm.newTasks}</h3>
          <h5 className="w-1/5 text-lg font-medium  text-yellow-400">{elm.activeTasks}</h5>
          <h5 className="w-1/5 text-lg font-medium  text-green-500"> {elm.completeTasks}</h5>
          <h5 className="w-1/5 text-lg font-medium  text-red-500">{elm.failedTasks}</h5>
  
        </div>

        })
       }
       </div>

      
    </div>
  )
}

export default AllTask
