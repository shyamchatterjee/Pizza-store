

import '../App.css'
import { BrowserRouter,Routes,Route } from "react-router";
import Home from './HomeComponent';
import ProductComponent from './productComponent';
import Createform from './createProduct';
import Cart from './cartComponent';

function App() {
      return <BrowserRouter>
            <Routes>
                  <Route  path='/createform'   element={<Createform/>} />
                 <Route path='/' element={<Home/>}  />
                  <Route path='/productcomponent'  element={<ProductComponent/>}/>
                  <Route  path='/cart' element={<Cart/>} />
            </Routes>
      </BrowserRouter>
}

export default App
