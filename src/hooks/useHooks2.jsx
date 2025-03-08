import { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"
import { contect } from "../contast/contect"
import { useNavigate } from "react-router"

let useHooks2 = ()=>{
   let {contectArray,setcontectArray,setwrongPassword} = useContext(Context)
    
     let navigate = useNavigate()
     let getapi = ()=>{
        contect.get("/user").then((value)=>{
              setcontectArray(value.data)
        })
     }
     useEffect(()=>{
        getapi()
     })
     let logiFuntion =  (data)=>{

          
       if (data.password.length>8 ) {
            setwrongPassword("Please currect your password")
            return
        } else if(data.password.length<8){
         setwrongPassword("Please currect your password")
         return
        }else{
         setwrongPassword("")
         
        }
        contect.post("/user",data).then((value)=>{
              getapi()
              alert("Login successful")
       
       
          navigate("/productcomponent")
          data.name = ""
          data.email = ""
          data.password = ""
   
        })

        
          
         
    }
    return ({logiFuntion})
     
}
export default useHooks2