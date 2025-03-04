import { Link } from "react-router"
import useHooks from "../hooks/useHooks"
import Product from "./product"
import { FaShoppingCart } from "react-icons/fa";

let Home = ()=>{
         
      return <> <div className="nav">
                <Link to="/createform">Create Product</Link>
                <div className="router-contener">
                <Link to="/" >Home</Link>
                <Link to="/productcomponent">Product</Link>
                </div>
                <Link to="/cart"> <div className="cart-contener">
                
                  < FaShoppingCart  className="cart-img"/> 
                  <p style={{fontSize:"13px",color:"black"}}>0</p>
                </div></Link>
      </div>
      <div className="heading-contener">
               <div className="heading">
                     <p>Are you hungry?</p>
                     <h2>Don't Wait !</h2>
                    <Link  to="/productcomponent"> <button className="order-now">Order Now</button></Link>
               </div>
               <img className="large-image" src="https://th.bing.com/th/id/OIP.Cw7uGPfe6kddYwb0QZVmGQHaFw?rs=1&pid=ImgDetMain" height={300} width={300} alt="" />
      </div>
      <div className="product-contener">
            <Product/>
</div>
      </>
}
export default Home