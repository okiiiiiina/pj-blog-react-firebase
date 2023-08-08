import React from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      // ローカルストレージにデータ入れ方
      localStorage.setItem("isAuth", true)
      setIsAuth(true);
      navigate("/");
    }).catch((error) => {
      console.log('ログイン失敗', error);
    });
  
  };
  
  return <div className="w-100 p-5 d-flex justify-content-center">
          <button className="btn-gray-square p-2"  onClick={loginWithGoogle}>ログインする</button>
        </div>
      
}

export default Login