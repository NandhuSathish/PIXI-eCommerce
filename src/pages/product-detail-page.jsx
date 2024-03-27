import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useFetchData(`/products/${productId}`);

  return (
    <div className="bg-white  mt-36">
      {isLoading && (
        <div className="flex justify-center mt-24 h-screen">
          <p>Loading...</p>
        </div>
      )}
      {product ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product && product.images && product.images[0]}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600  text-sm mb-4">
                {product.category ? product.category.name : 'No category'}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">Price:</span>
                  <span className="text-gray-600 pl-1 ">₹{product.price}</span>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 ">
                  Product Description:
                </span>
                <p className="text-gray-600  text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-24 h-screen">
          <p>No product found</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
