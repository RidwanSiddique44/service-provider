import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blogs/Blog';
import Checkout from './Checkout/Checkout';
import NotFound from './NotFound/NotFound';
import Login from './SignInPages/Login/Login';
import Signup from './SignInPages/Signup/Signup';
import RequireAuth from './SignInPages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
