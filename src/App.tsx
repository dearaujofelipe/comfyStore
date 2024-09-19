import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Login,
  Register,
  Products,
  SingleProduct,
  Cart,
  About,
  Checkout,
  Orders,
  Landing,
  Error,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <SingleProduct /> },
      { path: 'cart', element: <Cart /> },
      { path: 'about', element: <About /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
