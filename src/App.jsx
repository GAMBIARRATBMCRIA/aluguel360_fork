import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Futuramente, novas páginas serão adicionadas aqui */}
          <Route path="about" element={<div className="p-20 text-center text-xl">Sobre Nós (Em breve)</div>} />
          <Route path="contact" element={<div className="p-20 text-center text-xl">Contato (Em breve)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
