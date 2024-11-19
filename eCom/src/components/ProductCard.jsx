// src/components/ProductCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';
const ProductCard = ({ product }) => {
 const dispatch = useDispatch();
 return (
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link to={`/product/${product.id}`}>
<img
         src={product.images[0]}
         alt={product.title}
         className="w-full h-48 object-cover"
       />
</Link>
<div className="p-4">
<Link to={`/product/${product.id}`}>
<h2 className="text-xl font-semibold mb-2">{product.title}</h2>
</Link>
<p className="text-gray-600 mb-2 truncate">{product.description}</p>
<div className="flex justify-between items-center">
<span className="text-lg font-bold">${product.price}</span>
<button
           onClick={() => dispatch(addToCart(product))}
           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
           Add to Cart
</button>
</div>
</div>
</div>
 );
};
export default ProductCard;