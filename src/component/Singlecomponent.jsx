import { useEffect } from "react"
import { Link, useParams } from "react-router"
import { api } from "../Api/api"
import { useState } from "react"
import Addedproduct from "./addedbuton"
import { useContext } from "react"
import { Context } from "../context/context"
import { CiShoppingCart } from "react-icons/ci";
import useHooks from "../hooks/useHooks"

let SingleProduct = ()=>{
     let perams = useParams()
     let[element,setobject] = useState({})
       useEffect(()=>{
          api.get("/product/" + perams.id).then((value)=>{
                 setobject(value.data)
          })
       },[])
       let {cartArray} = useContext(Context)
      
       return <>
             <div className="nav">
        <Link to="/createform">Create Product</Link>
        <div className="router-contener">
          <Link to="/">Login</Link>
          <Link to="/productcomponent">Product</Link>

        </div>
        <Link to="/cart"> <div className="cart-img-contener">
                
                  < CiShoppingCart  className="cart-img"/> 
                  <p style={{fontSize:"13px",color:"red"}}>{cartArray.length}</p>

                </div></Link>
      </div>
       <div className="product-container">
       <div className="product">
                <img src={element.image} height={100} width={100} alt="" />
                 <h3>{element.name}</h3>
                   <div>{element.size}</div>
                   <h4 style={{color:"green"}}>{ "Rs. "+element.price}</h4>
                   <div className="add-remove-edit">
                     
                     <Addedproduct element ={element}/>
                     
                    <Link  to={"/updateform/" + element.id}><button className="edit">edit</button></Link>  

                   </div>
                   </div>
       </div>
          
       </>
}
export default SingleProduct