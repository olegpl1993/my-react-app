import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './modules/header/Header'
import Main from './modules/main/Main'
import Footer from './modules/footer/Footer';
import Slider from './modules/slider/Slider';
import Todo from './modules/todo/Todo';
import Notfound from './modules/notfound/Notfound';
import Blog from './modules/blog/Blog';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <main className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/slider' element={<Slider />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
