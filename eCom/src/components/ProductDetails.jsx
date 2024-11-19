import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
const ProductDetails = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const [product, setProduct] = useState(null);
 const [loading, setLoading] = useState(true);
 useEffect(() => {
   fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
     .then(response => response.json())
     .then(data => {
       setProduct(data);
       setLoading(false);
     })
     .catch(error => {
       console.error('Error fetching product details:', error);
       setLoading(false);
     });
 }, [id]);
 if (loading) {
   return <div className="text-center py-10">Loading...</div>;
 }
 if (!product) {
   return <div className="text-center py-10">Product not found</div>;
 }
 return (
<div className="container mx-auto px-4 py-8">
<div className="flex flex-col md:flex-row gap-8">
<div className="md:w-1/2">
<img
           src={product.images[0]}
           alt={product.title}
           className="w-full rounded-lg shadow-md"
         />
</div>
<div className="md:w-1/2">
<h1 className="text-3xl font-bold mb-4">{product.title}</h1>
<p className="text-gray-600 mb-4">{product.description}</p>
<p className="text-2xl font-bold mb-4">${product.price}</p>
<button
           onClick={() => dispatch(addToCart(product))}
           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
>
           Add to Cart
</button>
</div>
</div>
</div>
 );
};
export default ProductDetails;