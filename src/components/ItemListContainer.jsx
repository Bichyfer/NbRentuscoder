import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/mockData";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { textAlign } from "@mui/system";

const ItemListContainer = ({ bnv, sal }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const coleccionProductos = categoriaId
      ? query(collection(db, "products"), where("category", "==", categoriaId))
      : collection(db, "products");
    getDocs(coleccionProductos)
      .then((result) => {
        const lista = result.docs.map((producto) => {
          return {
            id: producto.id,
            ...producto.data(),
          };
        });
        setProductList(lista);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  console.log(productList);
  return (
    <div style={{ padding: "5rem" }}>
      <div class="saludo">
        <p>{sal}</p>
        <p>{bnv}</p>
      </div>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList} />}
    </div>
  );
};

export default ItemListContainer;
