import CategoryCard from '../components/category-card';
import useFetchData from '../hooks/useFetchData';

const CategoriesPage = () => {
  const { data: categories, isLoading } = useFetchData('categories');

  return (
    <>
      <h1 className="text-4xl font-semibold ml-64 mt-12">All Categories</h1>
      {isLoading && (
        <div className="flex justify-center mt-24 h-screen">
          <p>Loading...</p>
        </div>
      )}
      {categories.length > 0 ? (
        <div className=" mx-64 mt-24 grid auto-rows-[360px] grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl ${
                i === 3 || i === 6 ? 'col-span-2' : ''
              }`}
            >
              <CategoryCard key={category.id} category={category} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-24 h-screen">
          <p>No categories found</p>
        </div>
      )}
    </>
  );
};

export default CategoriesPage;
