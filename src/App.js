import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Skeleton from './components/Skeleton'; // تأكد من استخدام المسار الصحيح
import { CartProvider } from './components/CartContext'; 
import { Payment } from './components/Payment';
import DetailsPage from './components/Details';
import { Confirmation } from './components/Confirmation';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

let allRouters = createBrowserRouter([
  {
    path: '/',
    element: <Skeleton/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product/:id', element: <DetailsPage/> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/payment', element: <Payment/> },
      {path: '/confirmation', element:<Confirmation/>} 
    ]
  }
]);

export default function App() {
  return (
    <CartProvider>
      <ErrorBoundary> {/* استخدام ErrorBoundary هنا */}
        <div className="App">
          <RouterProvider router={allRouters} />
        </div>
      </ErrorBoundary>
    </CartProvider>
  );
}