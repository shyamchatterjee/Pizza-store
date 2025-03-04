import { useEffect } from "react";
import useHooks from "../hooks/useHooks";

let Product = () => {
  let { array, getApi,removeItem } = useHooks();
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
                   <h4>{element.price}</h4>
                   <div className="add-remove-edit">
                     
                      <button className="add">Add</button>
                      <button className="remove" onClick={()=>removeItem(element.id)}>Remove</button>
                      <button className="edit">edit</button>

                   </div>
        </div>
      })}
    </>
  );
};
export default Product;
