import './App.css';
import Nav from './components/Nav.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer.jsx';
import JobFind from './Pages/JobFind.jsx';
import Apply from './Pages/Apply.jsx';
import Services from './Pages/Services.jsx';
import Proposal from './Pages/Porposal.jsx';
import JobFindSearchPage from './Pages/JobFindSearchPage.jsx';
import About from './Pages/About.jsx';
import WhyUs from './Pages/WhyUs.jsx';
import Industries from './Pages/Industries.jsx';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import { configBackEndBaseUrl } from './configurations/config.js';
import { useEffect, useState } from 'react';
import AuthRoute from './components/AuthRoute.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';
import UserProfile from './Pages/UserProfile.jsx';

function App() {
  const [backEndLoading, setbackEndLoading] = useState(true);
  const [backEndError, setbackEndError] = useState(null);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/';
    configBackEndBaseUrl(backendUrl).then((response) => {
      if (response.data.connected) {
        console.log('✅ Backend connected successfully');
        setAppReady(true);
        setbackEndLoading(false);
      } else {
        setbackEndError('❌ Failed to connect to backend');
        setbackEndLoading(false);
        setAppReady(true);
      }
    }).catch((error) => {
      setbackEndError(error?.response?.data?.error || '❌ Backend connection failed');
      setbackEndLoading(false);
      setAppReady(true);
    });
  }, []);

  if (backEndLoading) return <div className="text-center mt-32">🔄 Connecting to backend...</div>;

  if (backEndError) return <div className="text-center mt-32 text-red-500">⚠️ {backEndError}</div>;

  if (!appReady) return <div className="text-center mt-32">🔄 Loading application...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>


        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/jobs" element={<JobFind />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/jobfindsearch" element={<JobFindSearchPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
