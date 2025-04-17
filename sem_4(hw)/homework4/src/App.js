import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
