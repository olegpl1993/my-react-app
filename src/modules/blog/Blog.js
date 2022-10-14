import { useState } from 'react';
import './Blog.css';
import Post from './post/Post';
import PostForm from './postForm/PostForm'

function Blog() {
  //массив для хранения постов
  const [posts, setPosts] = useState([
    { id: '34653453415', title: 'Hell world', text: 'Lorem bla bla bla fishing at the river.' },
    { id: '56373474537435', title: 'React app', text: 'He working junior frontend developer.' },
    { id: '5456456317634', title: 'React or angular', text: 'What library you prefer? React is my favorite!' },
    { id: '342354235423', title: 'Linux for all', text: 'Do you works at linux or windows?' },
  ])

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
      <div className="blog__selectRow">
        <div className="blog__sortText">Sort posts by</div>
        <select className="blog__sort">
          <option value="title">title</option>
          <option value="text">text</option>
        </select>
        <div className='blog__postList'>Post list</div>
      </div>
      <div className="blog__postBox">
        {posts.length !== 0
          ? posts.map((post) => <Post post={post} key={post.id} remove={removePost} />) //Цикл создает модули с постами
          : <div className='blog__postNotFound'>Message not found</div>
        }
      </div>
    </div>
  );
}

export default Blog;