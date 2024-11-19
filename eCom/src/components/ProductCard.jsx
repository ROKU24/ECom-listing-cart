import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';
import { parseImages } from '../utils/imageHelper';
const ProductCard = ({ product }) => {
 const dispatch = useDispatch();
 const images = parseImages(product.images);
 const firstImage = images[0] || '';
 return (
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link to={`/product/${product.id}`}>
<div className="h-48 overflow-hidden">
         {firstImage ? (
<img
             src={firstImage}
             alt={product.title}
             className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
             onError={(e) => {
               e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
               e.target.onerror = null;
             }}
           />
         ) : (
<div className="w-full h-full bg-gray-200 flex items-center justify-center">
<span className="text-gray-400">No Image Available</span>
</div>
         )}
</div>
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
           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
>
           Add to Cart
</button>
</div>
</div>
</div>
 );
};
export default ProductCard;