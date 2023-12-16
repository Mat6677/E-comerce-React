import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader";
import { useCollection } from "../hooks/useCollection";

export const Category = () => {
  const { categoryId } = useParams();
  const { data,loading } = useCollection("products");

  return loading ? <ItemListContainer products={data.filter(product => product.category == categoryId)} /> : <Loader />;
};
