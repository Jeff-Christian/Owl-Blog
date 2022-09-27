import './App.css';

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Context
import { AuthProvider } from './context/AuthContext';

// Firebase
import { onAuthStateChanged } from 'firebase/auth';

// Pages
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

// Components
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/Not Found/NotFound";

// hooks
import {useState, useEffect} from "react";
import {useAuthentication} from './hooks/useAuthentication';


function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  // attributed loading
  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })

  }, [auth]);

  // change at some point to a screen loading bar
  if(loadingUser){
    return <div className='loader'></div>
  }

  return (
    <>
    <div className='container'>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/home' element={!user ? <Home></Home> : <Navigate to='/'/>}></Route>
            <Route path='/*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
    </>
  );
}

export default App;
