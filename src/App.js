
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/auth/Login';
function App() {
  return (
    <div className="bg-[#111111]">
      <Router>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
      <Route path="/auth/login" element={<Login/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
