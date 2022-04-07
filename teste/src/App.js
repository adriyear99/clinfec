import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </Router>
  );
}