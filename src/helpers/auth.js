import { auth, provider } from '../firebase'
import { signInWithPopup, signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';

function login(setIsAuth) {
  signInWithPopup(auth, provider).then(() => {
    localStorage.setItem("isAuth", true) // ローカルストレージにデータを入れる
    setIsAuth(true);
    window.location.href = '/';
  }).catch((error) => {
    console.log('ログイン失敗', error);
  });
}

function logout(setIsAuth) {
  signOut(auth).then(() => {
  }).catch((error) => {
    console.log('ログアウト失敗', error);
  });
  window.location.href = '/';
  localStorage.clear(); // ローカルストレージをクリアにする方法
  setIsAuth(false);
}

export {
  login,
  logout
}
