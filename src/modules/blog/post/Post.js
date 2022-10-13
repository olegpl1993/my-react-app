import './Post.css';

function Post(props) {
  const remove = () => { props.remove(props.post) } //достаем функцию удаления из пропса и передаем в нее пост
  return (
    <div className="post">
      <div className="post__col">
        <div className="post__title">{props.post.title}</div>
        <div className="post__text">{props.post.text}</div>
      </div>
      <button className='post__button button' onClick={remove}>Delete</button>
    </div>
  );
}

export default Post;