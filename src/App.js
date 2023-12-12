import './App.css';
import MyAppBar from './components/AppBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import LoginForm from './pages/loginscreen';
import RegistrationStepper from './pages/registration';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/terms" element={<Terms />} />
          {/* <Route path="/terms" element={<Terms />} /> */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/registration" element={<RegistrationStepper />} /> 
        </Routes> 
    </Router>
    </div>
  );
}

export default App;
