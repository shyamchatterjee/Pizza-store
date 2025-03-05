import { Link } from "react-router";
import Product from "./product";
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";


import SearchItem from "./searchItem";

let ProductComponent = () => {
    let {cartArray} = useContext(Context)
  
   
  
  return (
    <>
    
      <div className="nav">
        <Link to="/createform">Create Product</Link>
        <div className="router-contener">
          <Link to="/">Login</Link>
          <Link to="/productcomponent">Product</Link>

        </div>
        <Link to="/cart"> <div className="cart-img-contener">
                
                  < CiShoppingCart  className="cart-img"/> 
                  <p style={{fontSize:"13px",color:"red"}}>{cartArray.length}</p>
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
         <div className="search-contener">
         <SearchItem/>
    
  
         </div>
      <div className="product-contener">
            <Product/>
</div>
    </>
  );
};
export default ProductComponent;
