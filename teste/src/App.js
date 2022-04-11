// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

// Páginas principais
import Home from "./components/pages/Home";
import Cadastro from "./components/pages/Cadastro";
import Tabelas from "./components/pages/Tabelas";

// Formulários de cadastro
import Paciente from "./components/project/Paciente";
import Medico from "./components/project/Medico";
import Consulta from "./components/project/Consulta";

// Tabelas
import TabelaPaciente from "./components/tables/TabelaPaciente";
import TabelaMedico from "./components/tables/TabelaMedico";
import TabelaConsulta from "./components/tables/TabelaConsulta";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/tabelas" element={<Tabelas/>}/>
          <Route path="/paciente" element={<Paciente/>}/>
          <Route path="/tabelaPaciente" element={<TabelaPaciente/>}/>
          <Route path="/medico" element={<Medico/>}/>
          <Route path="/tabelaMedico" element={<TabelaMedico/>}/>
          <Route path="/consulta" element={<Consulta/>}/>
          <Route path="/tabelaConsulta" element={<TabelaConsulta/>}/>
        </Routes>
      </Container>
    </Router>
  );
}