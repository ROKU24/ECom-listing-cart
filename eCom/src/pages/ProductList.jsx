import React from "react";
import { useDispatch } from "react-redux";
//import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
const ProductList = ({ products, addToCart }) => {
 const dispatch = useDispatch();
 const handleAddToCart = (product) => {
   dispatch(addToCart(product));
 };
 return (
<div className="grid grid-cols-3 gap-8">
     {products.map((product) => (
<div key={product.id} className="border p-4 rounded-lg shadow-lg">
<img
           src={product.images[0]} // Display the first image
           alt={product.title}
           className="w-full h-48 object-cover rounded-lg mb-4"
         />
<h2 className="text-xl font-semibold mb-2">{product.title}</h2>
<p className="text-gray-600 mb-4">{product.description}</p>
<p className="text-lg font-bold mb-4">${product.price}</p>
<div className="flex justify-between">
<Link
             to={`/product/${product.id}`}
             className="text-blue-500 hover:text-blue-700"
>
             View Details
</Link>
<button
             onClick={() => handleAddToCart(product)}
             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
>
             Add to Cart
</button>
</div>
</div>
     ))}
</div>
 );
};
export default ProductList;