import React from 'react';
import './App.css';
import MyAppBar from './components/AppBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import RegistrationForm from './pages/RegistrationForm';
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
import AccountingSkill from './components/AccountingSkill';
import CorporateFull from './pages/CorporateScoutFull';
import FullProgress from './pages/FullProgress';
import MaskingResume from './pages/MaskingResume';
import RecommendedJobSettings from './pages/RecommendedJobSettings';
import RecommendedJobForm  from './pages/RecommendedJobForm';
import EmailDeliverySettings from './pages/EmailDeliverySettings';
import Inquiry from './pages/Inquiry';
import ChangeMemberID from './pages/ChangeMemberID';
import LoginForm from './pages/LoginForm';
import ForgetPassword from './pages/ForgetPassword';
import FPAuthentication from './pages/fp-authentication';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AgentPage from './pages/AgentPage';
import RegistrationAuth from './pages/registrationauth';
import NormalResume from './pages/normalresume';
import MaskingApplication from './pages/MaskingApplication';
import MaskingApplicationConfirm from './pages/MaskingApplicationConfirm';
import NormalApplication from './pages/NormalApplication';
import NormalApplicationConfirm from './pages/NormalApplicationConfirm';
import ChangePassword from './pages/ChangePassword';
import SearchInfo from './pages/SearchInfo';
import WorkHistory from './pages/profile/WorkHistory';
import MessageTemplate from './pages/MessageTemplate';
import CreateMessage from './pages/CreatemessageTemplate';
import EditMessage from './pages/EditmessageTemplate';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/agent" element={<AgentPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/registration" element={<RegistrationStepper />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/messages" element={<MessageComponent />} />
          <Route path="/inprogress" element={<InProgressComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/recruitment/:job_id" element={<RecruitmentFullInfo />} />
          <Route path="/occupation" element={<OccupationComponent />} /> 
          <Route path="/industry" element={<IndustryComponent />} />
          <Route path="/income" element={<IncomeComponent />} />
          <Route path="/location" element={<LocationComponent />} />
          <Route path="/accountingskill" element={<AccountingSkill />} />
          <Route path="/messages/scout" element={<CorporateFull />} />
          <Route path="/fullprogress" element={<FullProgress />} />
          <Route path="/maskingresume" element={<MaskingResume />} />
          <Route path="/recommendedjob" element={<RecommendedJobSettings />} />
          <Route path="/recommendedjobform" element={<RecommendedJobForm />} />
          <Route path="/emaildelivery" element={<EmailDeliverySettings />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/changememberid" element={<ChangeMemberID />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/fpauthentication" element={<FPAuthentication />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/registrationauth" element={<RegistrationAuth />} />
          <Route path="/normalresume" element={<NormalResume />} />
          <Route path="/maskingapplication/:id" element={<MaskingApplication />} />
          <Route path="/maskingapplicationconfirm" element={<MaskingApplicationConfirm />} />
          <Route path="/normalapplication/:id" element={<NormalApplication />} />
          <Route path="/normalapplicationconfirm" element={<NormalApplicationConfirm />} />
          <Route path="/searchinfo" element={<SearchInfo />} />
          <Route path="/workhistory" element={<WorkHistory />} />
          <Route path="/messagetemplate" element={<MessageTemplate />} />
          <Route path="/createmessage" element={<CreateMessage />} />
          <Route path="/editmessage/:id" element={<EditMessage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;