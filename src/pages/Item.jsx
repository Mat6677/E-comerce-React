import { useParams } from "react-router-dom";
import { useItemCollection } from "../hooks/useItemCollection";
import { ItemDetailContainer } from "../Components/ItemDetailContainer/ItemDetailContainer";
import { Loader } from "../Components/Loader/Loader";

export const Item = () => {
  const { itemId } = useParams();
  const { data, loading } = useItemCollection("products", itemId);

  return loading ? <Loader /> : <ItemDetailContainer product={data} />;
};
