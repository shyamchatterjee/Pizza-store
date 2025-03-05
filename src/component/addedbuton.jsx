import { useContext } from "react"
import { Context } from "../context/context"
import useHooks from "../hooks/useHooks"

let Addedproduct = ({element})=>{
    let {addtoProduct} = useContext(Context)
    let {bttonColor,bttontext,bttoncolorChange,Disabled} = useHooks()
     
return  <button className="add" style={{backgroundColor:bttonColor}} disabled={Disabled} onClick={()=>{addtoProduct(element),bttoncolorChange()}}>{bttontext}</button>
}
export default Addedproduct