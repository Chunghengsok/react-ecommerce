import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../Hooks/useGetOneProduct";
function Product_Detial() {
  const route = useParams();
  const { products, isLoading } = useGetOneProduct(route.id);
  return (
    <>
      <div className="bg-gray-100 py-1 font-jost">
        <div className="max-w-[90%] lg:max-w-5xl mx-auto font-jost flex items-center gap-4 text-sm py-5">
          <Link className="text-2xl" to="/">
            Home
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <Link className="text-2xl" to="/product">
            Product
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="text-primary font-semibold text-2xl">
            {products.title}
          </span>
        </div>
        {isLoading ? (
          <div className="flex justify-center mt-10 ">
            <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-600"></div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 max-w-[90%] lg:max-w-5xl mx-auto py-10 gap-4 items-start">
            <div className="p-1 border border-gray-300">
              <img
                className="w-full h-full object-cover"
                src={products.image}
              />
            </div>
            <div>
              <h3 className="text-3xl uppercase">{products.title}</h3>
              <h1 className="text-6xl font-bold">{products.category}</h1>
              <p className="text-2xl font-bold text-red-500 mt-2">
                ${products.price}
              </p>

              <div className="flex items-center gap-5 my-8">
                <div className="border border-gray-300 w-32 py-2 flex justify-evenly items-center">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <button>1</button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="bg-primary text-white py-2 px-4">
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button className="bg-yellow-600 text-white py-2 px-4 hover:bg-yellow-500">
                    Pay Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300"></div>
              <p className="mt-4 text-gray-500">{products.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Product_Detial;
