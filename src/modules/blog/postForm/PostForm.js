import './PostForm.css';
import { useState } from 'react';

function PostForm({create}) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const addNewPost = () => { // добавляет новый пост в массив
    const newPost = { title: title, text: text } // новый пост
    create(newPost) //передаем колбеком пост в модуль Blog
    setTitle('') //очищает поле тайтл
    setText('') //очищает поле текст
  }

  return (
    <div className="postForm">
      <div className="postForm__col">
        <input
          className='postForm__inputTitle'
          type="text"
          placeholder='title'
          value={title}
          onInput={e => setTitle(e.target.value)}
        />
        <textarea
          className='postForm__inputBody'
          type="text"
          rows='2'
          placeholder='message'
          value={text}
          onInput={e => setText(e.target.value)}
        />
      </div>
      <button className='postForm__createPostButton button' onClick={addNewPost}>Add post</button>
    </div>
  );
}

export default PostForm;