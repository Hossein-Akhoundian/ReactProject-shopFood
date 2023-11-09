import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";

import Shop from "./pages/Shop";
import Login from "./pages/Login";
import EndLogin from "./pages/endLogin";

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Shop />} />
          <Route path="/endLogin" element={<EndLogin />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;





