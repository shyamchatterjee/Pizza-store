import { Link } from "react-router";

let Createform = () => {

 




  return (
    <>
    
      <div className="nav">
        <Link to="/createform">Create Product</Link>
        <div className="router-contener">
          <Link to="/">Home</Link>
          <Link to="/productcomponent">Product</Link>
        </div>
      </div>
      <div className="form-contener">
        <form className="form">
          <h2 style={{ textAlign: "center" }}>Create form</h2>
          <div className="mini-contener">
            <p>Product name</p>
            <input type="text" name="" id="name-input" placeholder="Name-product"  />
          </div>
          <div className="mini-contener">
            <p>Image</p>
            <input type="text" name="" id="image-input" placeholder="Img-url" />
          </div>
          <div className="mini-contener">
            <p>Size</p>
            <select name="" id="select-input">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Larger">Larger</option>
            </select>
          </div>
          <div className="mini-contener">
            <p>Price</p>
            <input type="number" name="" id="input-price" placeholder="input-ptice" />
          </div>
        </form>
      </div>
    </>
  );
};
export default Createform;
