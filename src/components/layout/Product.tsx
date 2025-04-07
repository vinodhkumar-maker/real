import { Link } from 'react-router-dom';
import { useProductsList } from '../../querys';

const Product = () => {
  const { data: products, isLoading, isError } = useProductsList();

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error loading products</div>;
  if (!products) return <div>No products found</div>;

  return (
    <div className="flex flex-col min-h-screen p-10 max-w-5xl">
      <h1 className="text-xl font-bold text-gray-800 mb-2 px-4 opacity-80 hover:bg-gray-200 w-1/8 rounded-md">
        Products
      </h1>
      <ul className="list-decimal pl-10 flex flex-col gap-2 overflow-y-auto">
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              className="py-1 bg-gray-100 rounded-md hover:text-blue-500 hover:underline hover:text-lg hover:font-medium hover:duration-300"
            >
              <Link className="ml-2" to={`/products/${product.id}`}>
                {product.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Product;
