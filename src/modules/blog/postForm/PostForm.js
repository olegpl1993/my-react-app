import './PostForm.css';
import { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const addNewPost = () => { // добавляет новый пост в массив
    //setPosts([...posts, { id: posts.length + 1, title: title, text: text }])
    setTitle('')
    setText('')
  }
  return (
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
  );
}