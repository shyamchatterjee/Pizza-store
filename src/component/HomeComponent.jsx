import { Link } from "react-router"

let Home = ()=>{
      return <> <div className="nav">
                <Link to="/createform">Create Product</Link>
                <div className="router-contener">
                <Link to="/" >Home</Link>
                <Link to="/productcomponent">Product</Link>
                </div>
                <Link to="/cart">Cart</Link>
      </div>
      <div className="heading-contener">
               <div className="heading">
                     <p>Are you hungry?</p>
                     <h2>Don't Wait !</h2>
                    <Link  to="/productcomponent"> <button className="order-now">Order Now</button></Link>
               </div>
               <img src="https://th.bing.com/th/id/OIP.CTvtcFfgBNVXb7DBolK--gHaHa?rs=1&pid=ImgDetMain" height={200} width={200} alt="" />
      </div>
      
      </>
}
export default Home