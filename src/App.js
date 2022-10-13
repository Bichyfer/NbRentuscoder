import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBoost from "./components/NavBoost";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";

function App() {
  const bnv = "Bienvenido a Rent Us! El rental premium de equipo técnico";
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBoost />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                bnv={bnv}
                sal={
                  <img src="https://thumbs.gfycat.com/AthleticAnotherAndeancondor-size_restricted.gif"></img>
                }
              />
            }
          />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer bnv={bnv} sal />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
