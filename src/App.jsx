import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/layout/Home";
import Login from "./components/utilities/Auth/Login";
import Register from "./components/utilities/Auth/Register";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
