import { useState } from "react"

const CreateTask = () => {

   const  [title,setTaskTitle]=useState("");
   const  [date,setTaskDate]=useState("");
   const  [description,setTaskDescription]=useState("");
   const  [asignto,setAsignto]=useState("");
   const  [category,setCategory]=useState("");
   
   const [newTask,setNewTask]=useState({});


   const  SubmitHandler= (e) => {
    e.preventDefault();
  
    // Validate inputs
    if (!title || !date || !description || !asignto || !category) {
      alert("Please fill out all fields before submitting.");
      return;
    }
  
    // Create a new task
    const newTask = {
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      complete: false,
      failed: false,
    };
  
    // Retrieve employees from localStorage
    const employeesData = localStorage.getItem("Employees");
  
    if (!employeesData) {
      alert("No employees found in local storage.");
      return;
    }
  
    let employees;
    try {
      employees = JSON.parse(employeesData); // Parse JSON string into an object
    } catch (error) {
      console.error("Error parsing employees data:", error);
      alert("Invalid data in local storage. Please reset employees data.");
      return;
    }
  
    // Assign task to the specified employee
    let taskAssigned = false;
  
    const updatedEmployees = employees.map((employee) => {
      if (employee.firstName === asignto) {
        if (!employee.tasks) {
          employee.tasks = []; // Initialize tasks array if missing
        }
        employee.tasks.push(newTask);
        taskAssigned = true;
      }
      return employee;
    });
  
    if (!taskAssigned) {
      alert(`No employee found with the name "${asignto}".`);
      return;
    }
  
    // Save updated employees to localStorage
    localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
    console.log("Task created successfully!", updatedEmployees);
  
    // Reset form fields
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setAsignto("");
    setCategory("");
  };
  
 

   return (
    <div className=" p-5 bg-[#1c1c1c] mt-5 rounded ">
    <form onSubmit={(e)=>{
      SubmitHandler(e);

    }} className=" flex flex-wrap items-start justify-between w-full  " >
          <div className=" w-1/2">
            <div>
              <h3  className=" text-base text-gray-300 mb-0.5">Task Title</h3>
               <input 
                  value={title}
                  onChange={(e)=>{
                    setTaskTitle(e.target.value);

                  }}
                
               className=" text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4 " type="text" placeholder="Make a UI design " />
            </div>
            <div>
               <h3 className=" text-base text-gray-300 mb-0.5">Date</h3>
               <input 
                 value={date}
                  onChange={(e)=>{
                    setTaskDate(e.target.value)

                  }} className="  text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4 " type="date" />
            </div>

            <div>
              <h3 className=" text-base text-gray-300 mb-0.5">Asign to</h3>
              <input 
              value={asignto}
              onChange={(e)=>{
                setAsignto(e.target.value)

              }} 
              className="  text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4 " type="text" placeholder="Employee name" />
            </div>

            <div>
               <h3 className=" text-base text-gray-300 mb-0.5">Category</h3>
               <input
               value={category}
               onChange={(e)=>{
                setCategory(e.target.value)

               }}  className=" text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4 " type="design dev etc." />
            </div>
           
          </div>

          <div className=" w-2/5 flex flex-col items-start"> 
             <h3 className=" text-base text-gray-300 mb-0.5">Discription</h3>
             <textarea 
                 value={description}
                  onChange={(e)=>{
                    setTaskDescription(e.target.value)

                  }}  name="" className=" w-full h-44 text-base py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 " id="" cols="30" rows="10"></textarea>
             <button className=" bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-base mt-5 w-full ">Create Task</button>
          </div>
        

    </form>
   </div>
  )
}

export default CreateTask
