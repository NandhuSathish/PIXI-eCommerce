import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    price,
    images: [firstImage],
  } = product;

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/products/${id}`}>
        <img
          src={firstImage}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
            <div className="ml-auto">
              <button class="p-1 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 text-sm">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
