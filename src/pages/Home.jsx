import Card from "../components/Card";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=8"
        );
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
  return (
    <div className="font-jost">
      <div className=" bg-[url('./slide_02.jpg')]  bg-center bg-cover lg:bg-contain bg-no-repeat bg-secondary px-40 h-screen flex items-center">
        <div>
          <p className="text-2xl font-bold py-5">NEW COLLECTION</p>
          <h1 className="text-3xl  lg:text-7xl font-bold mb-2">
            Luxury Without <br /> Labels
          </h1>
          <p>Explore new-in product and best sellers</p>

          <button className="bg-primary text-white py-2 px-4 rounded-full mt-4">
            View Collection
          </button>
        </div>
      </div>
      <div className="my-20 max-w-[90%] lg:max-w-5xl  mx-auto">
        <h2 className="text-center font-bold text-5xl">Best Sellers</h2>
        <p className="text-center">Explore our best seller products</p>

        {isLoading ? (
          <div className="flex justify-center mt-10 ">
            <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {products.map((product) => (
              <Card
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                id={product.id}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button className="bg-transparent border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all ">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
