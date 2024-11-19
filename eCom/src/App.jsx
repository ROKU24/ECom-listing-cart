import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
const App = () => {
 return (
<Provider store={store}>
<Router>
<div className="min-h-screen bg-gray-100">
<nav className="bg-white shadow-md">
<div className="container mx-auto px-4 py-4">
<div className="flex justify-between items-center">
<Link to="/" className="text-2xl font-bold text-blue-600">
                 E-Commerce Store
</Link>
<Link to="/cart" className="text-lg hover:text-blue-600">
                 Cart
</Link>
</div>
</div>
</nav>
<Routes>
<Route path="/" element={<ProductList />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/cart" element={<Cart />} />
</Routes>
</div>
</Router>
</Provider>
 );
};
export default App;