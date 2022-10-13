import { useState } from 'react';
import './Blog.css';
import Post from './post/Post';

function Blog() {
  //массив постов
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS для новичков', text: 'Lorem это любимая рыба всех верстальщиков' },
    { id: 2, title: 'JS для новичков 2', text: 'Lorem2 это рыба моей мечты' },
    { id: 3, title: 'JS для новичков 3', text: 'Lorem3 это любимая рыба всех верстальщиков' }
  ])
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const addNewPost = () => { // добавляет новый пост в массив
    setPosts([...posts, { id: posts.length + 1, title: title, text: text }])
    setTitle('')
    setText('')
  }

  return (
    <div className="blog">
      <div className="blog__createPost">
        <div className="blog__col">
          <input
            className='blog__inputTitle'
            type="text"
            placeholder='title'
            value={title}
            onInput={e => setTitle(e.target.value)}
          />
          <textarea
            className='blog__inputBody'
            type="text"
            rows='3'
            placeholder='message'
            value={text}
            onInput={e => setText(e.target.value)}
          />
        </div>
        <button className='blog__createPostButton button' onClick={addNewPost}>Add post</button>
      </div>
      <div className='blog__postList'>Post list</div>
      <div className="blog__postBox">
        {posts.map((post) => <Post post={post} key={post.id} />)} {/* Создает модули с постами*/}
      </div>
    </div>
  );
}

export default Blog;