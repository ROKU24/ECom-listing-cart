import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
const ProductList = () => {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 useEffect(() => {
   fetch('https://api.escuelajs.co/api/v1/products')
     .then(response => response.json())
     .then(data => {
       setProducts(data);
       setLoading(false);
     })
     .catch(error => {
       console.error('Error fetching products:', error);
       setLoading(false);
     });
 }, []);
 if (loading) {
   return <div className="text-center py-10">Loading...</div>;
 }
 return (
<div className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-8">Our Products</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {products.map(product => (
<ProductCard key={product.id} product={product} />
       ))}
</div>
</div>
 );
};
export default ProductList;