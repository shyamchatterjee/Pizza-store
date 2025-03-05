import { useEffect, useState } from "react";
import { api } from "../Api/api";
import { useNavigate } from "react-router";

let useHooks = () => {
  let [array, setArray] = useState([]);
  let [obj, setObj] = useState({});
  let [updateObj,setupdateObj] = useState({})
  let [loginData,setloginData] = useState({})
  let [wrongPassword,setwrongPassword] = useState("")
  let navigate = useNavigate()
  let getApi = () => {
    api.get("/product").then((value) => {
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
  return { array, getApi, removeItem, obj, setObj, postItem,updateObj,setupdateObj ,updateItem , loginData,setloginData ,logiFuntion ,wrongPassword};
};
export default useHooks;
