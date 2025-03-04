import { useEffect } from "react";
import useHooks from "../hooks/useHooks";

let Product = () => {
  let { array, getApi } = useHooks();
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
    
      {array.map((element) => {
        return <div className="product">
                <img src={element.image} height={100} width={100} alt="" />
                 <h3>{element.name}</h3>
                   <div>{element.size}</div>
                   <div className="price and button">
                      <h4>{element.price}</h4>
                      <button>Add</button>
                   </div>
        </div>
      })}
    </>
  );
};
export default Product;
