import React from 'react'
import { auth } from '../firebase'
import { signOut } from "firebase/auth";

const Logout = ({ setIsAuth }) => {
  const logout = () => {
    signOut(auth).then((res) => {
    }).catch((error) => {
      console.log('ログアウト失敗', error);
    });
    // ローカルストレージをクリアにする方法
    localStorage.clear();
    setIsAuth(false);
  };
  
  return <div className="w-100 p-5 d-flex justify-content-center">
            <button className="btn-gray-square p-2" onClick={logout}>ログアウトする</button>
        </div>
  
}

export default Logout