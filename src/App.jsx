import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/register/LoginPage";
import SignupPage from "./pages/register/SignupPage";
import ProfilePage from "./pages/account/ProfilePage";
import ProfileLayout from "./pages/account/ProfileLayout";
import ManageBlog from "./pages/account/ManageBlog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route path="/profile/managepost" element={<ManageBlog />} />
            <Route path="/profile/account" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
