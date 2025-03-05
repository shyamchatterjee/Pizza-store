import { useEffect } from "react";
import useHooks from "../hooks/useHooks"

let SearchItem = ()=>{
      let {name,setname,getApi,array,setArray} = useHooks()
      useEffect(()=>{
        if (name=="") {
          
        
          getApi();
          } else{
      
          
          let filteritem = array.filter((element)=>{
            if (element.name.toLowerCase().includes(name)) {
               return element
            }
      })
      setArray(filteritem)
      }
      },[name])
    return <input type="text" name="" id="" onChange={(e)=>{
            setname(e.target.value)
    }} />
}
export default SearchItem