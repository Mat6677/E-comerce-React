import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../Components/ItemDetailContainer/ItemDetailContainer";

export const Item = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return <ItemDetailContainer product={product} />;
};
