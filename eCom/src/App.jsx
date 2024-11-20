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
<Link to="/" className="text-3xl font-bold text-blue-600">
                 E Store
</Link>
{/* <Link to="/cart" className="text-lg hover:text-blue-600"> */}
<Link to="/cart" className=" ">
<svg
 role="img"
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 width="30px"
 height="30px"
>
<path
   fill="#285ff4"
   d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4"
 />
<circle cx="10.5" cy="19.5" r="1.5" fill="#285ff4" />
<circle cx="16.5" cy="19.5" r="1.5" fill="#285ff4" />
</svg>
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