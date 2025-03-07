

import '../App.css'
import { BrowserRouter,Routes,Route } from "react-router";
import Home from './HomeComponent';
import ProductComponent from './productComponent';
import Createform from './createProduct';
import Cart from './cartComponent';
import Updateform from './updateForm';
import { ContextFuntion } from '../context/context';
import SingleProduct from './Singlecomponent';


function App() {
      return <BrowserRouter>
          <ContextFuntion>
            <Routes>
                  <Route  path='/createform'   element={<Createform/>} />
                 <Route path='/' element={<Home/>}  />
                  <Route path='/productcomponent'  element={<ProductComponent/>}/>
                  <Route  path='/cart' element={<Cart/>} />
                  <Route path='/updateform/:elementid' element= {<Updateform/>}    />
                  <Route path='/productcontener/:id'  element={<SingleProduct/>}  />
            </Routes>
            </ContextFuntion>
      </BrowserRouter>
}

export default App
