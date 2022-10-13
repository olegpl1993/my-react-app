import { useState } from 'react';
import './Blog.css';
import Post from './post/Post';
import PostForm from './postForm/PostForm'

function Blog() {
  //массив для хранения постов
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS для новичков', text: 'Lorem это любимая рыба всех верстальщиков' },
    { id: 2, title: 'JS для новичков 2', text: 'Lorem2 это рыба моей мечты' },
    { id: 3, title: 'JS для новичков 3', text: 'Lorem3 это любимая рыба всех верстальщиков' }
  ])

  //калбек достает пост из компонента
  const createPost = (newPost) => { 
    setPosts([...posts, {...newPost, id: posts.length + 1}])
  }

  return (
    <div className="blog">
      <PostForm create={createPost} />
      <div className='blog__postList'>Post list</div>
      <div className="blog__postBox">
        {posts.map((post) => <Post post={post} key={post.id} />)} {/* Цикл создает модули с постами*/}
      </div>
    </div>
  );
}

export default Blog;