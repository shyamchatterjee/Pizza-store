import { useEffect, useState } from "react";
import { api } from "../Api/api";

let useHooks = () => {
  let [array, setArray] = useState([]);
  let [obj, setObj] = useState({});
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

  return { array, getApi, removeItem, obj, setObj, postItem };
};
export default useHooks;
