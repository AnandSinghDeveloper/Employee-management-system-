import { createContext, useEffect, useState } from "react"
import { GetLoaclStorage } from "../utils/localstorage";

 export const AuthContextProvider = createContext()

const Authcontext = ({children}) => {

 const  [userData,setUserData] = useState(null);
    
       useEffect(()=>{
        const  {EmployeesData,AdminData} = GetLoaclStorage();

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
