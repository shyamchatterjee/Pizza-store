import { useContext, useState } from "react"
import { Link } from "react-router"
import { Context } from "../context/context"

let Cart = ()=>{
    let {cartArray,removeItem} = useContext(Context)
       
    return <> <div className="nav">
    <Link to="/createform">Create Product</Link>
    <div className="router-contener">
    <Link to="/" >Login</Link>
    <Link to="/productcomponent">Product</Link>
    </div>

</div>
  <div className="cart-contener">
        {cartArray.map((element)=>{
              return <div className="cart">
                      <img src={element.image} height={70} width={70} alt="" />
                        <h3>{element.name}</h3>
                        <h4 style={{color:"green"}}>{ "Rs." + element.price}</h4>
                        <p>{"Quntity: "+ element.q}</p>
                        <p style={{color:"red"}}>{"Total: " + "Rs. " + element.price*element.q}</p>
                        <button className="remove" onClick={removeItem(element.id)}>Remove</button>
              </div>
        })}
  </div>
  
</>
}
export default Cart