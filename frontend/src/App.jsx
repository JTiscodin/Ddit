import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import OrgRegister from "./pages/OrgSignup";
import UserRegister from "./pages/UserSignup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/register/org" element={<OrgRegister />} />
          <Route path="/register/user" element={<UserRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
