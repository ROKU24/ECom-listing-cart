import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
 const dispatch = useDispatch();
 return (
<div className="border rounded-md p-4">
<Link to={`/product/${product.id}`}>
<img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover" />
<h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
<p className="text-gray-700">${product.price}</p>
</Link>
<button
       className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
       onClick={() => dispatch(addToCart(product))}
>
       Add to Cart
</button>
</div>
 );
};
export default ProductCard;