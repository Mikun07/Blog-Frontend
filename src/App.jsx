import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/register/LoginPage";
import SignupPage from "./pages/register/SignupPage";
import ProfilePage from "./pages/account/ProfilePage";
import ProfileLayout from "./pages/account/ProfileLayout";
import ManageBlog from "./pages/account/ManageBlog";
import ProfileRoutes from "./routes/ProfileRoutes";
import { authToken } from "./store/auth";
const ProtectedRoutes = () => {
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route element={<ProfileLayout />}>
              <Route path="/profile/*" element={<ProfileRoutes />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
