import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative bg-white shadow ">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold">
            IPIX-Shop
          </NavLink>
        </div>

        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink
              className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
              activeClassName="text-red-500"
              to="/categories"
            >
              Category
            </NavLink>
            <NavLink
              className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
              to="/users"
            >
              Users
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
