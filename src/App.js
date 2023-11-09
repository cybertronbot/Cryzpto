
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
function App() {
  return (
    <div className="bg-[#111111]">
      <Router>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Register/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
