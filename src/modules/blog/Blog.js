import { useState } from 'react';
import './Blog.css';
import Post from './post/Post';

function Blog() {
  const [posts, setPosts] = useState([ //массив постов
    { id: 1, title: 'JS для новичков', text: 'Lorem это любимая рыба всех верстальщиков' },
    { id: 2, title: 'JS для новичков 2', text: 'Lorem2 это рыба моей мечты' },
    { id: 3, title: 'JS для новичков 3', text: 'Lorem3 это любимая рыба всех верстальщиков' }
  ])

  return (
    <div className="blog">
      <div className="blog__createPost">
        <div className="blog__col">
          <input className='blog__inputTitle' type="text" placeholder='title' />
          <textarea className='blog__inputBody' type="text" rows='5' placeholder='message' />
        </div>
        <button className='blog__createPostButton button'>Add post</button>
      </div>
      <div className='blog__postList'>Post list</div>
      <div className="blog__body">
        {posts.map((post) => <Post post={post} key={post.id} />)} {/* Создает модули с постами*/}
      </div>
    </div>
  );
}

export default Blog;