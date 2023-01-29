import './Main.css';
import Counter from './counter/Counter';
import TextInput from './textInput/TextInput';
import ChangeImage from './changeImage/ChangeImage';
import UiTextInput from './uiTextInput/UiTextInput';

function Main() {
  return (
    <div className="main">
      <div className="line">
        <Counter />
      </div>
      <div className="line">
        <TextInput />
      </div>
      <div className="line">
        <UiTextInput />
      </div>
      <div className="line">
        <ChangeImage />
      </div>
    </div>
  );
}

export default Main;
