import React from 'react';
import './App.css';
import MyAppBar from './components/AppBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import LoginForm from './pages/loginscreen';
import RegistrationStepper from './pages/registration';
import MyPage from './pages/mypage';
import MessageComponent from './pages/message';
import InProgressComponent from './pages/inprogress';
import ProfileComponent from './pages/profile';
import RecruitmentFullInfo from './pages/RecruitmentFullInfo';
import OccupationComponent from './components/occupation';
import IndustryComponent from './components/industry';
import IncomeComponent from './components/income';
import LocationComponent from './components/location';
import CorporateFull from './pages/CorporateScoutFull';
import FullProgress from './pages/FullProgress';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/registration" element={<RegistrationStepper />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/messages" element={<MessageComponent />} />
          <Route path="/inprogress" element={<InProgressComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/recruitment" element={<RecruitmentFullInfo />} />
          <Route path="/occupation" element={<OccupationComponent />} /> 
          <Route path="/industry" element={<IndustryComponent />} />
          <Route path="/income" element={<IncomeComponent />} />
          <Route path="/location" element={<LocationComponent />} />
          <Route path="/messages/scout" element={<CorporateFull />} />
          <Route path="/fullprogress" element={<FullProgress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;