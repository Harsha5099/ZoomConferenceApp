import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing.jsx';
import './App.css';
import Authentication from './pages/Authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Videomeetcomponent from './pages/Videomeet.jsx';
import HomeComponent from './pages/home.jsx';
import History from './pages/history.jsx';


function App() {
  return (
    <div className="App">
      
      
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/history" element={<History/>} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/auth" element={<Authentication/>} />
        <Route path="/:url" element={<Videomeetcomponent/>} />
      </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
