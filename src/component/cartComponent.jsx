import { useContext, useState } from "react"
import { Link } from "react-router"
import { Context } from "../context/context"

let Cart = ()=>{
    let {cartArray,removeItem} = useContext(Context)
     let [granpriceShow,setgrandpriceshow] = useState("")
         let totalpriceFind = ()=>{
            let sum = 0
            cartArray.map((element)=>{
                  sum = sum + (element.price*element.q)
            })
            setgrandpriceshow("Rs. " + sum)
         }
    return <> <div className="nav">
    <Link to="/createform">Create Product</Link>
       <button onClick={totalpriceFind}>Grand total</button>
    <div className="router-contener">
    <Link to="/" >Login</Link>
       
    <Link to="/productcomponent">Product</Link>
    </div>

</div>
     <div className="grand-price-contener"> <h3> {"Grand total: " +granpriceShow}</h3> </div>
  <div className="cart-contener">
        {cartArray.map((element)=>{
              return <div className="cart">
                      <img src={element.image} height={70} width={70} alt="" />
                        <h3>{element.name}</h3>
                        <h4 style={{color:"green"}}>{ "Rs." + element.price}</h4>
                        <p>{"Quntity: "+ element.q}</p>
                        <p style={{color:"red"}}>{"Total: " + "Rs. " + element.price*element.q}</p>
                        <button className="remove-button" onClick={ ()=>removeItem(element.id)}>Remove</button>
              </div>
        })}
  </div>
  
</>
}
export default Cart