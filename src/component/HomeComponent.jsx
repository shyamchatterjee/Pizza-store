import { Link } from "react-router"
import useHooks from "../hooks/useHooks"
import Product from "./product"
import { CiShoppingCart } from "react-icons/ci";

let Home = ()=>{
      let {loginData,setloginData,logiFuntion,wrongPassword} = useHooks()
         
      return <> <div className="nav">
                <Link to="/createform">Create Product</Link>
                <div className="router-contener">
                <Link to="/"  >Login</Link>
                <Link to="/productcomponent">Product</Link>
                </div>
               
      </div>
      <div className="form-contener">
        <form className="form" onSubmit={(e)=>{e.preventDefault(),logiFuntion(loginData)}} >
          <h2 style={{ textAlign: "center" , color:"blue" }}>Log in</h2>
          <div className="mini-contener">
            <p> Name</p>
            <input type="text" name="" id="name-input" placeholder="Enter your name" required value={loginData.name} onChange={(e)=>{setloginData({...loginData,name : e.target.value})}}  />
          </div>
          <div className="mini-contener">
            <p>Email</p>
            <input type="email" name="" id="image-input" placeholder="Enter your email" required value={loginData.email} onChange={(e)=>{setloginData({...loginData,email : e.target.value})}}    />
          </div>
          
          <div className="mini-contener">
            <p>Password</p>
            <input type="password" name="" id="input-price" placeholder="Enter any 8 character password" required value={loginData.password} onChange={(e)=>{setloginData({...loginData,password : e.target.value})}}   />
              <p style={{color:"red"}}>{wrongPassword}</p>
          </div>
            <input style={{backgroundColor: "blue"}} className="submit-button" type="submit" value="submit" />
        </form>
      </div>
      </>
}
export default Home