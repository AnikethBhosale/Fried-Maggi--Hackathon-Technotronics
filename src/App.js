import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpg from "./login.jsx";
import LoginAdmin from "./loginAdmin.jsx";
import LoginStudent from "./loginStudent.jsx";
import LoginVendor from "./loginVendor.jsx";
import StudentPage from "./studentPage.jsx";
import VendorIP from "./vendorPage.jsx";
import AdminPage from "./AdminPage.jsx";
import RedeemPage from "./RedeemPage.jsx"; // Import the RedeemPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpg />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/login/vendor" element={<LoginVendor />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/vendor" element={<VendorIP />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/redeem" element={<RedeemPage />} /> {/* Add RedeemPage route */}
      </Routes>
    </Router>
  );
}

export default App;