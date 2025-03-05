import { useContext } from "react"
import { Context } from "../context/context"

let Addedproduct = ({element})=>{
    let {addtoProduct} = useContext(Context)
return  <button className="add" onClick={()=>addtoProduct(element)}>Add</button>
}
export default Addedproduct