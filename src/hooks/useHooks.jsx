import { useEffect, useState } from "react"
import { api } from "../Api/api"

let useHooks = ()=>{
     let [array,setArray] = useState([])
        let getApi = ()=>{
            api.get("/product").then((value)=>{
                 setArray(value.data)
            })
        }
        return ({array,getApi})
       
}
export default useHooks