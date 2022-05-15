import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/brand/land_page"
function App() {
  return (
    <div className="App">      
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
