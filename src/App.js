import './App.css';

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

// Components
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/Not Found/NotFound";


function App() {
  return (
    <>
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
