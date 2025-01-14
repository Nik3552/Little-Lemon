import './App.css';
import HomePage from './HomePage';
import About from './About';
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer, useEffect } from 'react';

const initialState = {
  availableTimes: [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]
};

function availableTimesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return {
        ...state,
        availableTimes: action.payload
      };
    default:
      return state;
  }
}

function initializeTimes(date) {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
}

function App() {
  const [state, dispatch] = useReducer(availableTimesReducer, initialState);

  const updateTimes = (date) => {
    const updatedTimes = initializeTimes(date);
    dispatch({
      type: 'UPDATE_TIMES',
      payload: updatedTimes
    });
  };

  useEffect(() => {
    document.title = "Little Lemon"
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/booking'
          element={<BookingPage availableTimes={state.availableTimes} updateTimes={updateTimes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
