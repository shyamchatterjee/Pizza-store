import { useContext, useEffect, useState } from "react";
import { api } from "../Api/api";
import { useNavigate, useSearchParams } from "react-router";
import { Context } from "../context/context";

let useHooks = () => {
  let navigate = useNavigate()
    let { setArray,updateObj,obj,setwrongPassword}  = useContext(Context)
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
   let logiFuntion =  (data)=>{
     
       if (data.password.length>8 ) {
           setwrongPassword("Please correct your password")
           return
       } else if(data.password.length<8){
        setwrongPassword("Please correct your password")
        return
       } 
       alert("Login successful")
      
      
         navigate("/productcomponent")
  
         
        // navigate("/productcomponent")
   }
   
  return { getApi, removeItem, postItem ,updateItem , logiFuntion };
};
export default useHooks;
