import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ourproducts from './pages/Ourproducts';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Upload from './admin/Upload';
import Admin from './admin/Admin';
import Update from './admin/Update';
import Edit from './admin/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coco' element={<Ourproducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/sign' element={<Signin/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/edit/:id' element={<Edit/>} loader={({params})=>fetch(`http://localhost:7777/product/${params.id}`)}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
