import { createContext } from "react";

export  let Context = createContext(null)
export let ContextFuntion = ({children})=>{
     return <Context>
          {children}
     </Context> 

}