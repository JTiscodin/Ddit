import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Signin from "./pages/Signin"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="signin" element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
