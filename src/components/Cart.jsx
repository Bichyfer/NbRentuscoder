import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, cartTotal, clear } = useCart();
  const navegar = useNavigate();

  console.log(cart);
  return (
    <div>
      {!cart.length ? (
        <div>
          <h2>Tienes que agregar algo para poder seguir con tu alquiler</h2>
          <h4>Mira nuestro rental</h4>
          <button className="btn btn-success" onClick={() => navegar("/")}>
            Alquilar
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Tu alquiler</h2>
          {cart.map((compra) => (
            <CartItem key={compra.id} compra={compra} />
          ))}
          <span>Presupuesto : ${cartTotal()}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <button className="btn btn-danger" onClick={clear}>
              Vaciar bolsa
            </button>
            <button
              className="btn btn-success"
              onClick={() => navegar("/checkout")}
            >
              Finalizar tu alquiler
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
