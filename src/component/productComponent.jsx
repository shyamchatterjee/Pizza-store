import { Link } from "react-router"
import Product from "./product"
import { CiShoppingCart } from "react-icons/ci";

let ProductComponent = ()=>{
    return <> <div className="nav">
    <Link to="/createform">Create Product</Link>
    <div className="router-contener">
    <Link to="/" >Home</Link>
    <Link to="/productcomponent">Product</Link>
    </div>
    <Link to="/cart"> <div className="cart-contener"> < CiShoppingCart  className="cart-img"/>
    <p style={{fontSize:"13px",color:"black"}}>0</p>
        </div>
    </Link>
</div>
   <div className="product-contener">
           <Product/>
   </div>
</>
}
export default ProductComponent