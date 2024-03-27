import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { id, name, image } = category;
  return (
    <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-white h-auto md:h-full flex flex-col">
      <Link
        to={`/categories/${id}/products`}
        href=""
        class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
      >
        <img
          src={image || 'http://placehold.it/500x500'}
          alt={name}
          class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
        <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
          {name}
        </h3>
      </Link>
    </div>
  );
};

export default CategoryCard;
