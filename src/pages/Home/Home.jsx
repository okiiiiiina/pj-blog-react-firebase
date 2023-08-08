import React, { useEffect, useState } from 'react'
import './Home.css'
import { auth, db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

const Home = () => {
  const [postList,  setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await getDocs(collection(db, "posts"));
      setPostList(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  // 投稿削除
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id)).then(() => {
      // 再読み込み
      window.location.href = '/';
    });
  };

  return (
    <div className="container">
      {postList.map((post) => {
        return (
          <div key={post.id} className="card">
            <h2 className="title">
              {post.title}
            </h2>
            <div className="content">
              {post.content}
            </div>
            <div className="wrap-bottom">
              <div className="create-user-name">
                @{post.author.username}
              </div>
              {/* 「?」オプショナルチェイン */}
              {post.author.id === auth.currentUser?.uid && (
                <button className="btn-delete" onClick={() => deletePost(post.id)}>
                  削除
                </button>
                )
              }
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Home
