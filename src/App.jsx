
// import { useEffect } from 'react';
import { useContext, useState } from 'react';

import './App.css';
import AdminDashbord from './components/Dashbord/AdminDashbord';
import Login from './components/AUTH/Login';
// import { GetLoaclStorage, SetLoaclStorage } from './utils/localstorage';
import EmployeeDashbord from './components/Dashbord/employeeDashbord';
import { AuthContextProvider } from './context/Authcontext';

const App = () => {

     const [user , setUser] =useState(null);

    const handleLogin= (email,password)=>{
       if(email=="Admin@me.com" && password == "123"){
            setUser("Admin")
    
      }else if( email=="Employee@me.com" && password == "123"){
        setUser("Employee")
        
      }else{
        alert("Invaild Credentials")
      }
         
    };

    // handleLogin();

  //  useEffect(()=>{
  //   //  SetLoaclStorage()
  //   GetLoaclStorage();
  //  },);

  const data2 = useContext(AuthContextProvider);
    console.log(data2)

  return (
    <div>
     {
      !user ? <Login handleLogin={handleLogin}/>: ""
     }
     {
      user == "Admin"? <AdminDashbord/> : <EmployeeDashbord/>
     }
      {/* <EmployeeDashbord/> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;

