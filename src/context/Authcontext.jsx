import { createContext, useEffect, useState } from "react"
import { GetLoaclStorage, SetLoaclStorage } from "../utils/localstorage";

 export const AuthContextProvider = createContext()

const Authcontext = ({children}) => {
  // localStorage.clear()

 const  [userData,setUserData] = useState(null);
    
       useEffect(()=>{
        const  {EmployeesData,AdminData} = GetLoaclStorage();
        SetLoaclStorage()
        setUserData({EmployeesData , AdminData});

       },[])

     

  return (
    <div>
      <AuthContextProvider.Provider value={userData}>
      {children}
      </AuthContextProvider.Provider>
    </div>
  )
}

export default Authcontext
