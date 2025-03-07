import { useContext, useEffect } from "react";
import useHooks from "../hooks/useHooks";
import { Link } from "react-router";
import { Context } from "../context/context";
import Addedproduct from "./addedbuton";

let Product = () => {
  let {  removeItem } = useHooks();
     let {array} = useContext(Context)
 
  
  return (
    <>
    
      {array.map((element) => {
        return <Link to={"/productcontener/"+ element.id}><div className="product">
                <img src={element.image} height={100} width={100} alt="" />
                 <h3>{element.name}</h3>
                   <div>{element.size}</div>
                   <h4 style={{color:"green"}}>{ "Rs. "+element.price}</h4>
                   <div className="add-remove-edit">
                     
                     <Addedproduct element ={element}/>
                      <button className="remove" onClick={()=>removeItem(element.id)}>Remove</button>
                    <Link  to={"/updateform/" + element.id}><button className="edit">edit</button></Link>  

                   </div>
        </div> </Link> 
      })}
    </>
  );
};
export default Product;
