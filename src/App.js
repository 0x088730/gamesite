import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './GlobalState/Store';
import { Provider } from 'react-redux';
import LandingPage from './pages/LandingPage';
import NFTStore from "./pages/Store";
function App() {
  return (
    <div className="App">      
      <Provider store={Store}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/store' element={<NFTStore />}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
