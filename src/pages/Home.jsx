import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import { Loader } from "../Components/Loader/Loader";
import { useCollection } from "../hooks/useCollection";

export const Home = () => {
  const { data, loading } = useCollection("products");

  return loading ? <ItemListContainer products={data} /> : <Loader />;
};
