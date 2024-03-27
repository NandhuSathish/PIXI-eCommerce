import { Route, Routes } from 'react-router-dom';

// Layouts
import Base from '../layouts/Base/Base';

// Pages
import ProductPage from '../pages/product-page';
import ProductDetailPage from '../pages/product-detail-page';
import CategoriesPage from '../pages/categories-page';
import ProductsByCategoryPage from '../pages/products-by-category-page';
import UserListPage from '../pages/user-list-page';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/categories/:categoryId/products"
          element={<ProductsByCategoryPage />}
        />
        <Route path="/users" element={<UserListPage />} />
      </Route>
    </Routes>
  );
}
