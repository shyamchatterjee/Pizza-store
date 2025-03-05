import { createContext, useState } from "react";

export let Context = createContext(null);
export let ContextFuntion = ({ children }) => {
  let [cartArray, setcartArray] = useState([]);
  let [array, setArray] = useState([]);
  let [obj, setObj] = useState({});
  let [updateObj,setupdateObj] = useState({})
  let [loginData,setloginData] = useState({})
  let [wrongPassword,setwrongPassword] = useState("")
  
  let [Name, setName] = useState("")
 
  let addtoProduct = (data) => {
    let findItem = cartArray.find((item) => {
      if (item.id === data.id) {
        return item;
      }
    });
    if (findItem) {
      let filterItem = cartArray.filter((item) => {
        if (item.id !== data.id) {
          return item;
        }
      });
      setcartArray([...filterItem, { ...findItem, q: findItem.q + 1 }]);
    } else {
      setcartArray([...cartArray, { ...data, q: 1 }]);
    }
  };
  let removeItem = (id) => {
    let filterItem = cartArray.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setcartArray(filterItem);
  };

  return (
    <Context.Provider value={{ cartArray, addtoProduct, removeItem,array,setArray,updateObj,setupdateObj,obj,setObj,loginData,setloginData,wrongPassword,setwrongPassword,Name,setName}}>
      {children}
    </Context.Provider>
  );
};
