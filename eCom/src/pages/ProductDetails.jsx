import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../redux/CartSlice'
const ProductDetails = () => {
 const { productId } = useParams();
 const [product, setProduct] = useState(null);
 const dispatch = useDispatch();
 useEffect(() => {
   fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
     .then((response) => response.json())
     .then((data) => setProduct(data));
 }, [productId]);
 const handleAddToCart = (product) => {
   dispatch(addToCart(product));
 };
 if (!product) return <div>Loading...</div>;
 return (
<div className="container mx-auto p-4">
<Link to="/" className="text-blue-500 mb-4 block">Back to Product List</Link>
<div className="grid grid-cols-2 gap-8">
<div>
<img
           src={product.images[0]} // Display the first image
           alt={product.title}
           className="w-full h-96 object-cover rounded-lg"
         />
</div>
<div>
<h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
<p className="text-lg mb-4">{product.description}</p>
<p className="text-lg font-bold mb-4">${product.price}</p>
<button
           onClick={() => handleAddToCart(product)}
           className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
>
           Add to Cart
</button>
</div>
</div>
</div>
 );
};
export default ProductDetails;