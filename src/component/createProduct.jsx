import { Link } from "react-router";
import useHooks from "../hooks/useHooks";
import { useContext } from "react";
import { Context } from "../context/context";

let Createform = () => {

   let {postItem} = useHooks()
   let {obj,setObj} = useContext(Context)

    


  return (
    <>
    
      <div className="nav">
        <Link to="/createform">Create Product</Link>
        <div className="router-contener">
          <Link to="/">Login</Link>
          <Link to="/productcomponent">Product</Link>
        </div>
      </div>
      <div className="form-contener">
        <form className="form" onSubmit={(e)=>{e.preventDefault(),postItem(obj)}}>
          <h2 style={{ textAlign: "center" , color:"green" }}>Create Product</h2>
          <div className="mini-contener">
            <p>Product name</p>
            <input type="text" name="" id="name-input" placeholder="Enter productname" value={obj.name} onChange={(e)=>{setObj({...obj,name:e.target.value})}}  />
          </div>
          <div className="mini-contener">
            <p>Image</p>
            <input type="text" name="" id="image-input" placeholder=" Enter Img-url" value={obj.image}  onChange={(e)=>{setObj({...obj,image:e.target.value})}} />
          </div>
          <div className="mini-contener">
            <p>Size</p>
            <select name="" id="select-input" onClick={(e)=>{setObj({...obj,size:e.target.value})}}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Larger">Larger</option>
            </select>
          </div>
          <div className="mini-contener">
            <p>Price</p>
            <input type="number" name="" id="input-price" placeholder="Enter product price" value={obj.price} onChange={(e)=>{setObj({...obj,price: Number(e.target.value)})}} />
          </div>
          <div className="mini-contener">
            <p>rating</p>
            <input type="text" name="" id="input-price" placeholder="Enter rating" value={obj.rating} onChange={(e)=>{setObj({...obj,rating: e.target.value})}} />
          </div>
            <input className="submit-button" type="submit" value="Post" />
        </form>
      </div>
    </>
  );
};
export default Createform;
