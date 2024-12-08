



const TaskListNumber = ({UserData}) => {
  return (
    <div className=" flex mt-10  justify-between gap-5 screen " >
      <div className=" rounded-xl w-[45%] py-6 px-9 bg-red-400 ">
        <h2 className=" text-3xl font-semibold"> {UserData.failedTasks}</h2>
        <h3  className=" text-2xl font-medium">Failed Task</h3>

      </div>

      <div className=" rounded-xl w-[45%] py-6 px-9 bg-blue-400 ">
        <h2 className=" text-3xl font-semibold"> {UserData.newTasks}</h2>
        <h3  className=" text-2xl font-medium">New Task</h3>

      </div>

      <div className=" rounded-xl w-[45%] py-6 px-9 bg-green-400 ">
        <h2 className=" text-3xl font-semibold"> {UserData.completeTasks}</h2>
        <h3  className=" text-2xl font-medium">Completed Task</h3>

      </div>

      <div className=" rounded-xl w-[45%] py-6 px-9 bg-yellow-400 ">
        <h2 className=" text-3xl text-black font-semibold"> {UserData.activeTasks}</h2>
        <h3  className=" text-2xl text-black font-medium">Active Task</h3>

      </div>

      
    </div>
  )
}

export default TaskListNumber
