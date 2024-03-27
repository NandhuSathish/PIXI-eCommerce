import { useParams } from 'react-router-dom';
import ProductCard from '../components/product-card';
import useFetchData from '../hooks/useFetchData';

const ProductsByCategoryPage = () => {
  const { categoryId } = useParams();
  const { data: products, isLoading } = useFetchData(
    `categories/${categoryId}/products`
  );

  return (
    <>
      <h1 className="text-4xl font-semibold ml-64 mt-12">
        {products[0]?.category?.name}
      </h1>
      {isLoading && (
        <div className="flex justify-center mt-24 h-screen">
          <p>Loading...</p>
        </div>
      )}
      {products.length > 0 ? (
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <div className="flex justify-center mt-24 h-screen">
          <p>No products found</p>
        </div>
      )}
    </>
  );
};

export default ProductsByCategoryPage;
