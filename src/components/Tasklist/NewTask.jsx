

const NewTask = ({data}) => {
  console.log(data);
  
  return (
    <div className=" flex-shrink-0 h-full w-[350px] p-5 bg-blue-400  rounded-xl ">
    <div className=" flex justify-between items-center">
     <h3 className=" bg-blue-500 px-3 text-sm py-1 rounded ">{data.category}</h3>
     <h4 className=" text-base"> {data.date} </h4>
     
    </div>
    <h2 className=" text-2xl font-semibold mt-5"> {data.title} </h2>

    <p className=" text-sm mt-3">
     {data.description}
    </p>

    <div className="mt-[50%] flex justify-center ">
      <button className=" bg-blue-500  py-1 px-2 text-sm rounded w-full">Accept Task</button>
    </div>

   </div>
  )
}

export default NewTask
