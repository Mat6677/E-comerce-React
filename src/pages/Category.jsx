import { useState, useEffect } from "react";
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader";

export const Category = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryId}`)
      .then((res) => {
        setProducts(res.data.products);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);
  return loaded ? <ItemListContainer products={products} /> : <Loader />
};
