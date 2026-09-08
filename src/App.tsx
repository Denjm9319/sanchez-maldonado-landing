import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
