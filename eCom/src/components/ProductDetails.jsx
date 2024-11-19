import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import ImageGallery from './ImageGallery';
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
   return (
<div className="flex justify-center items-center min-h-screen">
<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
</div>
   );
 }
 if (!product) {
   return (
<div className="container mx-auto px-4 py-8">
<div className="text-center text-xl text-gray-600">Product not found</div>
</div>
   );
 }
 return (
<div className="container mx-auto px-4 py-8">
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
<div className="flex flex-col lg:flex-row">
<div className="lg:w-2/3 p-4">
<ImageGallery images={product.images} />
</div>
<div className="lg:w-1/3 p-8">
<div className="mb-4">
<h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
<p className="text-sm text-gray-500">Category: {product.category?.name}</p>
</div>
<div className="mb-6">
<p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
</div>
<div className="mb-8">
<span className="text-3xl font-bold text-blue-600">${product.price}</span>
</div>
<button
             onClick={() => dispatch(addToCart(product))}
             className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
>
<span>Add to Cart</span>
</button>
</div>
</div>
</div>
</div>
 );
};
export default ProductDetails;