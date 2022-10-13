import './Post.css';

function Post(props) {
  return (
    <div className="post">
      <div className="post__col">
        <div className="post__title">{props.post.id}. {props.post.title}</div>
        <div className="post__text">{props.post.text}</div>
      </div>
      <button className='post__button button'>Delete</button>
    </div>
  );
}

export default Post;