import axios from "axios";
import { useEffect, useState } from "react";

function useGetOneProduct(id) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    products,
    isLoading,
  };
}

export default useGetOneProduct;
