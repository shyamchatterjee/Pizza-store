import { Link } from "react-router"

let Home = ()=>{
      return <> <div className="nav">
                <Link to="/createform">Create Product</Link>
                <div className="router-contener">
                <Link to="/" >Home</Link>
                <Link to="/productcomponent">Product</Link>
                </div>
                <Link to="/cart">Cart</Link>
      </div></>
}
export default Home