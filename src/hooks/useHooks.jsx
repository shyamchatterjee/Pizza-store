import { useEffect, useState } from "react"
import { api } from "../Api/api"

let useHooks = ()=>{
     let [array,setArray] = useState([])
        let getApi = ()=>{
            api.get("/product").then((value)=>{
                 setArray(value.data)
            })
        }

        let removeItem = (id)=>{
           api.delete("/product/"+id).then((value)=>{
                 getApi()
           })
        }
        return ({array,getApi,removeItem})
       
}
export default useHooks