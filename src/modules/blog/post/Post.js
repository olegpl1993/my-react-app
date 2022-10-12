import './Post.css';

function Post(props) {
  console.log(props)
  console.log('Hell world')
  return (
    <div className="post">
      <div className="post__col">
        <div className="post__topic">JS для новичков</div>
        <div className="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus illum quidem aperiam consequuntur minima aliquam saepe, tenetur optio aliquid rem, quod in omnis commodi placeat ullam rerum facere vel?</div>
      </div>
      <button className='post__button'>Удалить</button>
    </div>
  );
}

export default Post;