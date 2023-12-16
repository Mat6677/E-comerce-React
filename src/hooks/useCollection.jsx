import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [categ, setCategorias] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dataCollection = collection(db, collectionName);

    getDocs(dataCollection)
      .then((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setCategorias(snapshot.docs.map((doc) => doc.data().category));
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(true));
  }, []);

  return { data, loading, error,categ };
};
