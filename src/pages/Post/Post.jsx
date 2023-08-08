import React, { useEffect } from 'react'
import './Post.css'
import { auth, db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({ isAuth }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const storePost = async () => {
    await addDoc(collection(db, 'posts'), {
      title: title,
      content: content,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    });
    navigate("/");
  };

  useEffect(() => {
    // ログインユーザーでなければ、リダイレクト
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate])

  return (
    <div className="container">
      <h1>記事を投稿する</h1>
      <div className="form">
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          className="mb-2"
          type="text"
          placeholder='タイトルを入力'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">内容</label>
        <textarea
          id="content"
          className="mb-2"
          placeholder='内容を入力'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        <div className="wrap-btn">
          <button className="btn-post btn-gray-square" onClick={ storePost }>投稿</button>
        </div>
      </div>
      {/* <Toast></Toast> */}
    </div>
  )
}

export default Post
