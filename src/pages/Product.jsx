import Card from "../components/Card";
import useGetAllProduct from "../Hooks/useGetAllProduct";
function Product() {
  const { products, isLoading } = useGetAllProduct();
  return (
    <div className="max-w-[90%] lg:max-w-5xl mx-auto">
      <div className="m-20">
        <h1 className="text-center text-4xl fontn-bold uppercase">
          All Products
        </h1>
        {isLoading ? (
          <div className="flex justify-center mt-10 ">
            <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
      </div>
    </div>
  );
}

export default Product;
