import { useContext, useEffect, useState } from "react";
import { AuthContextProvider } from "../../context/Authcontext";




const Header = ({UserData}) => {

   const [username,setUsername]=useState(null);

 console.log(UserData);
 

  // useEffect(()=>{
  //   localStorage.getItem(loggedinUser.role)

  // },[])



  
  
  
let LogOUTUser= ()=>{
   localStorage.setItem('loggedinUser',"");
   window.location.reload();
}
  
  
  return (
    <div  className=" flex items-end justify-between  " >

      
       <h1 className=" text-2xl font-medium   " >Hello <br /><span className=" text-3xl font-semibold "> username 👋 </span></h1>
       <button onClick={LogOUTUser} className=" bg-red-600 text-lg font-medium text-white px-5 py-2  rounded-sm"> Log Out</button>
     
    </div>
  )
}

export default Header
