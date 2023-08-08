import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
// import Login from './pages/Login';
// import Logout from './pages/Logout';
import Navbar from './components/Navbar/Navbar';


/*-------------------------------------------*/
/*  BrowserRouter
/*-------------------------------------------*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const [isAuth, setIsAuth] = useState(auth.currentUser ? true : false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post isAuth={isAuth}/>}></Route>
          {/* <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*-------------------------------------------*/
/*  createBrowserRouter *上手くリンクできない
/*-------------------------------------------*/
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "post",
//     element: <Post />,
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
//   {
//     path: "logout",
//     element: <Logout />,
//   },
// ]);
//
// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

export default App;
