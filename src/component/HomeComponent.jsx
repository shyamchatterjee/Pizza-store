import { Link, useNavigate } from "react-router"
import useHooks from "../hooks/useHooks"
import Product from "./product"
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { Context } from "../context/context";
import useHooks2 from "../hooks/useHooks2";
import { contect } from "../contast/contect";

let Home = ()=>{
        let {loginData,setloginData,wrongPassword} = useContext(Context)
      let {logiFuntion} = useHooks2()
      
      
         
      return <> 
      <div className="form-contener">
        <form className="form" onSubmit={(e)=>{e.preventDefault(),    logiFuntion(loginData)}} >
          <h2 style={{ textAlign: "center" , color:"blue" }}>Log in</h2>
          <div className="mini-contener">
            <p style={{color:"green"}}> Name</p>
            <input type="text" name="" id="name-input" placeholder="Enter your name" required value={loginData.name} onChange={(e)=>{setloginData({...loginData,name : e.target.value})}}  />
          </div>
          <div className="mini-contener">
            <p style={{color:"green"}}>Email</p>
            <input type="email" name="" id="image-input" placeholder="Enter your email" required value={loginData.email} onChange={(e)=>{setloginData({...loginData,email : e.target.value})}}    />
            
          </div>
          
          <div className="mini-contener">
            <p style={{color:"green"}}>Password</p>
            <input type="password" name="" id="input-price" placeholder="Enter any 8 character password" required value={loginData.password} onChange={(e)=>{setloginData({...loginData,password : e.target.value})}}   />
              <p style={{color:"red"}}>{wrongPassword}</p>
          </div>
            <input style={{backgroundColor: "blue"}} className="submit-button" type="submit" value="submit" />
        </form>
      </div>
      </>
}
export default Home