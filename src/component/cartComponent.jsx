import { Link } from "react-router"

let Cart = ()=>{
    return <> <div className="nav">
    <Link to="/createform">Create Product</Link>
    <div className="router-contener">
    <Link to="/" >Login</Link>
    <Link to="/productcomponent">Product</Link>
    </div>

</div>
  
</>
}
export default Cart