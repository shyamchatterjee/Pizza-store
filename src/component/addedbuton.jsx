import { useContext, useState } from "react";
import { Context } from "../context/context";


let Addedproduct = ({ element }) => {
  let { addtoProduct } = useContext(Context);
    let [bttontext,setbttonText] = useState("Add")
      let [bttonColor,setbottonColor] = useState("orange")
  let [Disabled,setDisabled] = useState(false)
  let bttoncolorChange = ()=>{
    setbttonText("Added")
    setbottonColor("green")
    setDisabled(true)
      setTimeout(() => {
        setbttonText("Add")
        setbottonColor("orange")
        setDisabled(true)
      }, 2000);
     
 }

  return (
    <button
      className="add"
      style={{ backgroundColor: bttonColor }}
      disabled={Disabled}
      onClick={() => {
        addtoProduct(element), bttoncolorChange();
      }}
    >
      {bttontext}
    </button>
  );
};
export default Addedproduct;
