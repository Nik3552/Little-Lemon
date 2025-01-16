import './App.css';
import { HomePage } from './HomePage';
import { About } from './About'
import { BookingPage } from './components/BookingPage'
import { Login } from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Little Lemon"
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/booking'
          element={<BookingPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
