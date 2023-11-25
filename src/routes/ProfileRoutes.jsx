import { Navigate, Routes, Route } from "react-router-dom";
import ManageBlog from "../pages/account/ManageBlog";
import ProfilePage from "../pages/account/ProfilePage";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="account" />} />
      <Route path="account" element={<ProfilePage />} />
      <Route path="managepost" element={<ManageBlog />} />
    </Routes>
  );
};

export default ProfileRoutes;
