import { useContext, useEffect } from "react";
import useHooks from "../hooks/useHooks";
import { Context } from "../context/context";
import { useSearchParams } from "react-router";
import { api } from "../Api/api";

let SearchItem = () => {
  let {  getApi } = useHooks();
   let { array, setArray,Name,setName} = useContext(Context)
    
     
  useEffect(() => {
    if (Name == "") {
      getApi();
    } else {
       let filterItem = array.filter((element)=>{
            if (element.name.toLowerCase().includes(Name.toLowerCase())) {
                 return element
            }
       })
       setArray(filterItem)
      
      
    }
  }, [Name]);
  return (
    <input
    className="search-item"
      type="text"
      name=""
      id=""
      placeholder="Search-product"
      onChange={(e) => {
        setName( e.target.value);
      }}
    />
  );
};
export default SearchItem;
