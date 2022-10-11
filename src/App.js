import './App.css';
import Header from './modules/header/Header'
import Main from './modules/main/Main'
import Footer from './modules/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Main />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
