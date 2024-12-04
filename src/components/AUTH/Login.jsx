import { useState } from "react";


const Login = () => {

  const [email, setEmail]=useState("") 
     const [password, setPassword]=useState("") 

 
   const submitHandler = (e)=>{
     
     

       e.preventDefault();
       console.log("hello gentalman your form is submited")
       console.log("Email:", email);
       console.log("Password:", password);

       setEmail("");
       setPassword("");
       
   }

  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <div className=" border-2 border-emerald-600 p-20 rounded-xl ">
        <form onSubmit={(e)=>{
               submitHandler(e)
        }}  className=" flex flex-col  items-center justify-center " >
          <input 
          value={email}

           onChange={(e)=> setEmail(e.target.value)  }
          required className=" outline-none bg-transparent border-2 border-emerald-600 text-3xl py-3 px-5  rounded-full placeholder:text-gray-400 " type="text" placeholder=" Enter Your Email" />
          <input
          value = {password}

          onChange={(e)=> setPassword(e.target.value)}
          
          required  className=" outline-none bg-transparent border-2 border-emerald-600 text-3xl  py-3 px-5 mt-4 rounded-full placeholder:text-gray-400"  type ="password" placeholder= "Enter Your Password"/>
          <button className=" mt-6 outline-none  border-none bg-emerald-600 text-3xl py-3  w-full px-5 rounded-full text-white ">Log in</button>
        </form>

      </div>
     
    </div>
  )
}

export default Login
