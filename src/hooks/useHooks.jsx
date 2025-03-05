import { useContext, useEffect, useState } from "react";
import { api } from "../Api/api";
import { useNavigate, useSearchParams } from "react-router";
import { Context } from "../context/context";

let useHooks = () => {
  
    let { setArray,updateObj,obj}  = useContext(Context)
    let [query,setquery]= useSearchParams()
       let limit = query.get("limit")
  useEffect(() => {
    getApi(limit);
  }, [])
  
  let getApi = (limit) => {
    api.get("/product?_limit=" + limit).then((value) => {
      setArray(value.data);
    });
  };

  let removeItem = (id) => {
    api.delete("/product/" + id).then((value) => {
      getApi();
    });
  };
  let postItem = (data) => {
    api.post("/product", data).then((value) => {
      getApi();
    });
    obj.name = "";
    obj.image = "";
    obj.price = "";
  };
  let updateItem = (id,data)=>{
        api.patch("/product/"+id,data).then((value)=>{
              getApi()
              updateObj.name = ""
              updateObj.size = ""
              updateObj.image = ""
              updateObj.price = ""
        })
  }
   
   
  return { getApi, removeItem, postItem ,updateItem };
};
export default useHooks;
