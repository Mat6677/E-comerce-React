import { useEffect, useState } from "react";
import axios from "axios";
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import { Loader } from "../Components/Loader/Loader";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/?limit=10")
      .then((res) => {
        setProducts(res.data.products);
        setLoaded(true)
      })
      .catch((error) => console.log(error));
  }, []);

  return loaded ? <ItemListContainer products={products} /> : <Loader />;
};
