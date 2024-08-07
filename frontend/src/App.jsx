import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import OrgRegister from "./pages/OrgSignup";
import UserRegister from "./pages/UserSignup";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import OrgSignin from "./pages/OrgSignin";
import UserSignin from "./pages/UserSignin";
import MarketPlace from "./pages/MarketPlace";
import ErrorPage from "./pages/ErrorPage";
import Sidebar from "./components/Sidebar";
import RightSideBar from "./components/RightSideBar";

function App() {
  const [authenticated, setauthenticated] = useState(true);

  return (
    <>
      <BrowserRouter>
        <AnonAadhaarProvider>
          {authenticated ? (
            <>
              <Sidebar />
              <div className="flex">
                <Routes>
                  <Route path="/marketplace" element={<MarketPlace />} />
                  <Route path="*" element={<LandingPage />} />
                </Routes>
                <RightSideBar />
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route index path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="signin" element={<Signin />} />
                <Route path="/register/org" element={<OrgRegister />} />
                <Route path="/register/user" element={<UserRegister />} />
                <Route path="/signin/org" element={<OrgSignin />} />
                <Route path="/signin/user" element={<UserSignin />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </>
          )}
        </AnonAadhaarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
