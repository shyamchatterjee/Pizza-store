import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { api } from "../Api/api"
import useHooks from "../hooks/useHooks"
import { Context } from "../context/context"

let Updateform = ()=>{
     let perams = useParams()
       let {updateItem} = useHooks()
      let {updateObj,setupdateObj} = useContext(Context)
    useEffect(()=>{
         api.get("/product/"+perams.elementid).then((value)=>{
                setupdateObj(value.data)
         })
    },[])
    return <>
       <div className="nav">
        <Link to="/createform">Create Product</Link>
        <div className="router-contener">
          <Link to="/">Login</Link>
          <Link to="/productcomponent">Product</Link>
        </div>
      </div>
      <div className="form-contener">
        <form className="form" onSubmit={(e)=>{e.preventDefault(),updateItem(updateObj.id,updateObj)}} >
          <h2 style={{ textAlign: "center" ,color:"green" }}>Update Product</h2>
          <div className="mini-contener">
            <p>Product name</p>
            <input type="text" name="" id="name-input" placeholder=" Enter productname" value={updateObj.name} onChange={(e)=>{setupdateObj({...updateObj,name:e.target.value})}}  />
          </div>
          <div className="mini-contener">
            <p>Image</p>
            <input type="text" name="" id="image-input" placeholder="  Enter Img-url" value={updateObj.image}  onChange={(e)=>{setupdateObj({...updateObj,image:e.target.value})}} />
          </div>
          <div className="mini-contener">
            <p>Size</p>
            <select name="" id="select-input" value={updateObj.size} onClick={(e)=>{setupdateObj({...updateObj,size:e.target.value})}}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Larger">Larger</option>
            </select>
          </div>
          <div className="mini-contener">
            <p>Price</p>
            <input type="number" name="" id="input-price" placeholder="Enter-price" value={updateObj.price} onChange={(e)=>{setupdateObj({...updateObj,price: Number(e.target.value)})}} />
          </div>
          <div className="mini-contener">
            <p>Rating</p>
          <input type="text" name="" id="input-price" placeholder="Enter rating" value={updateObj.rating} onChange={(e)=>{setupdateObj({...updateObj,rating: e.target.value})}} />
          </div>
            <input className="submit-button" type="submit" value="Update" />
        </form>
      </div>
    </>
      
}
export default Updateform