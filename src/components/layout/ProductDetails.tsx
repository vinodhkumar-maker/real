import { faChevronRight, faLeftLong, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Products } from '../../apiType';
import ZenButton from '../button/ZenButton';

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (!productId) {
      setError('Invalid product ID');
      setLoading(false);
      navigate('/products');
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        if (!response.ok) {
          throw new Error(`Product with ID ${productId} not found`);
        }

        const data: Products = await response.json();
        setProduct(data);
        setCurrentImage(data.image);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, navigate]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <h2 className="font-bold">Error</h2>
          <p>{error}</p>
          <ZenButton
            label="Back to previous page"
            type="button"
            variant="danger-outline"
            onClick={() => navigate('/products')}
            leftIconComponent={<FontAwesomeIcon icon={faLeftLong} className="mr-1" />}
          />
        </div>
      </div>
    );

  if (!product)
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
          <h2 className="font-bold">Product Not Found</h2>
          <ZenButton
            label="Back to previous page"
            type="button"
            variant="danger-outline"
            onClick={() => navigate('/products')}
            leftIconComponent={<FontAwesomeIcon icon={faLeftLong} className="mr-1" />}
          />
        </div>
      </div>
    );

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={`full-${i}`} className="h-5 w-5 text-yellow-400" />,
      );
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStar} className="h-5 w-5 text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={`empty-${i}`} className="h-5 w-5 text-gray-300" />,
      );
    }

    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="flex  mb-4 items-center space-x-1 md:space-x-3 ">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          Home
        </Link>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-400 mx-1" />
          <Link
            to="/products"
            className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Products
          </Link>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-400 mx-1" />
          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{product.title}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center h-96">
            <img
              src={currentImage}
              alt={product.title}
              className="max-h-full max-w-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <ZenButton
              type="button"
              variant="dark-outline"
              onClick={() => {}}
              className="w-20 h-20 border rounded-md overflow-hidden p-0"
              leftIconComponent={
                <img
                  src={product.image}
                  alt="Thumbnail 1"
                  className="w-full h-full object-contain"
                />
              }
            />
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>

          <div className="flex items-center mb-4">
            <div className="flex mr-2">{renderStars(product.rating.rate)}</div>
            <span className="text-blue-600 text-sm font-medium ml-1">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 ml-1">+ applicable taxes</span>
          </div>

          <div className="mb-6">
            <span className="text-green-600 text-sm font-medium">In Stock</span>
            <p className="text-gray-500 text-sm mt-1">FREE delivery on eligible orders</p>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <h3 className="text-lg font-medium mb-2">About this item</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>{product.description}</li>
              <li>High quality material</li>
              <li>Easy to use</li>
              <li>1 year manufacturer warranty</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <ZenButton
              label="Add to Cart"
              type="button"
              variant="yellow"
              onClick={() => alert('Added to cart')}
            />
            <ZenButton
              label="Buy Now"
              type="button"
              variant="warning-outline"
              onClick={() => alert('Proceeding to checkout')}
            />
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-1">Sold by: ExampleSeller</p>
            <p className="mb-1">Delivery: 2-3 business days</p>
            <p>Returns: 30 days return policy</p>
          </div>
        </div>
      </div>
      <div>
        <ZenButton
          label="Back to previous page"
          type="button"
          variant="secondary-outline-selected"
          onClick={() => navigate(-1)}
          leftIconComponent={<FontAwesomeIcon icon={faLeftLong} className="mr-1" />}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
