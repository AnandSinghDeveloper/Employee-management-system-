
// import { useEffect } from 'react';
import { useContext, useEffect, useState } from 'react';

import './App.css';
import AdminDashbord from './components/Dashbord/AdminDashbord';
import Login from './components/AUTH/Login';
// import { GetLoaclStorage, SetLoaclStorage } from './utils/localstorage';
import EmployeeDashbord from './components/Dashbord/EmployeeDashbord';
import { AuthContextProvider } from './context/Authcontext';

const App = () => {

     const [user , setUser] =useState(null);
     const [LogedinUserData,setLogedinUserData ]=useState(null);
     const authData = useContext(AuthContextProvider);

    //  console.log(authData);
     

     useEffect(()=>{

      const loggedinUser = localStorage.getItem("loggedinUser") ;
      if(loggedinUser){
         const Userdata= JSON.parse(loggedinUser);
        //  console.log(Userdata);
         
         setUser(Userdata.role);


         
         setLogedinUserData(Userdata.data)

      
        
         
      }

     },[])
    
    // useEffect(()=>{
    //   if(authData){
    //     const loggedinUser = localStorage.getItem("loggedinUser") 
    //     if(loggedinUser){
    //       setUser(loggedinUser.role)
    //     }
    //   }
    // },[authData]);
    // console.log(authData.EmployeesData)

    const handleLogin= (email,password)=>{
       if(authData && authData.AdminData.find((e)=>email==e.email && e.password==e.password)){
            setUser("Admin");
            localStorage.setItem("loggedinUser",JSON.stringify({role:"Admin"}))
    
      }else if( authData  ){
      const employee = authData.EmployeesData.find((e)=>email==e.email && e.password==e.password)
        if(employee){
          setUser("Employee")
          setLogedinUserData(employee)
          localStorage.setItem("loggedinUser",JSON.stringify({role:"Employee",data:employee}))
        }
        
      }else{
        alert("Invaild Credentials")
      }
         
    };

    // handleLogin();

  //  useEffect(()=>{
  //    SetLoaclStorage()
  //   // GetLoaclStorage();
  //  },[]);

  

  return (
    <div>
     {
      !user ? <Login handleLogin={handleLogin}/>: ""
     }
     {
      user == "Admin"? <AdminDashbord changeUser={setUser}/> : user== "Employee"? <EmployeeDashbord changeUser={setUser} UserData={LogedinUserData} />:""
     }
    
    </div>
  );
};

export default App;

