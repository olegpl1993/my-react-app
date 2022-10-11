import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './modules/header/Header'
import Main from './modules/main/Main'
import Footer from './modules/footer/Footer';
import Slider from './modules/slider/Slider';
import Todo from './modules/todo/Todo';
import Notfound from './modules/notfound/Notfound';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <main className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/slider' element={<Slider />} />
          <Route path='/todo' element={<Todo />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
