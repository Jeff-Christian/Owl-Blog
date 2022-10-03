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
import Search from './Pages/Search/Search';
import Dashboard from './Pages/Dashboard/Dashboard';

// Components
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/Not Found/NotFound";
import Post from './Components/Post/Post';

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
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={!user ? <Login></Login> : <Navigate to='/home'/>}></Route>
            <Route path='/home' element={user ? <Home></Home> : <Navigate to='/'/>}></Route>

            <Route path='/*' element={<NotFound></NotFound>}></Route>
            <Route path='/search' element={user ? <Search></Search> : <Navigate to='/'/>}></Route>
            <Route path='/posts/:id' element={user ? <Post></Post> : <Navigate to='/'/>}></Route>
            <Route path='/dashboard' element={user ? <Dashboard></Dashboard> : <Navigate to='/'/>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
