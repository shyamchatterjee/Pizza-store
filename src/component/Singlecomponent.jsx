import { useEffect } from "react"
import { useParams } from "react-router"
import { api } from "../Api/api"
import { useState } from "react"

let SingleProduct = ()=>{
     let perams = useParams()
     let[object,setobject] = useState({})
       useEffect(()=>{
          api.get("/product/" + perams.id).then((value)=>{
                 setobject(value.data)
          })
       },[])
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
       </>
}
export default SingleProduct