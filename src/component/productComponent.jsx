import { Link } from "react-router"

let ProductComponent = ()=>{
    return <> <div className="nav">
    <Link to="/createform">Create Product</Link>
    <div className="router-contener">
    <Link to="/" >Home</Link>
    <Link to="/productcomponent">Product</Link>
    </div>
    <Link to="/cart">Cart</Link>
</div>
   <div className="product-contener">

   </div>
</>
}
export default ProductComponent