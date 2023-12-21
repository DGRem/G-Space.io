import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/pages/Home";
import Login from "./components/utilities/Login";
import Register from "./components/utilities/Register";

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
