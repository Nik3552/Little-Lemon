import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="header-section">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
