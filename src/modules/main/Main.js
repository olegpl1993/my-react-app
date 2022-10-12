import './Main.css';
import Counter from './counter/Counter';
import TextInput from './textInput/TextInput';

function Main() {
  return (
    <div className="main">
      <div className="line">
        <Counter />
      </div>
      <div className="line">
        {<TextInput />}
      </div>
      <div className="line">
        
      </div>
    </div>
  );
}

export default Main;
