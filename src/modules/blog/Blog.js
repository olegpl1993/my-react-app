import { useState } from 'react';
import './Blog.css';
import Post from './post/Post';
import PostForm from './postForm/PostForm'

function Blog() {
  //массив для хранения постов
  const [posts, setPosts] = useState([])

  //калбек получает пост из компонента PostForm и добавляет в массив
  const createPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }])
  }

  //калбек получает пост из компонента Post и удаляет его из массива
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="blog">
      <PostForm create={createPost} />
      <div className='blog__postList'>Post list</div>
      <div className="blog__postBox">
        {posts.map((post) => <Post post={post} key={post.id} remove={removePost} />)} {/* Цикл создает модули с постами*/}
      </div>
    </div>
  );
}

export default Blog;