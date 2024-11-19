import React, { useState } from 'react';
import { parseImages } from '../utils/imageHelper';
const ImageGallery = ({ images: rawImages }) => {
 const [selectedImage, setSelectedImage] = useState(0);
 const images = parseImages(rawImages);
 if (!images.length) {
   return (
<div className="h-96 w-full bg-gray-200 flex items-center justify-center">
<span className="text-gray-400">No Images Available</span>
</div>
   );
 }
 return (
<div className="space-y-4">
     {/* Main Image */}
<div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
<img
         src={images[selectedImage]}
         alt="Selected product view"
         className="w-full h-full object-contain"
         onError={(e) => {
           e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
           e.target.onerror = null;
         }}
       />
</div>
     {/* Thumbnail Gallery */}
     {images.length > 1 && (
<div className="flex space-x-2 overflow-x-auto pb-2">
         {images.map((image, index) => (
<button
             key={index}
             onClick={() => setSelectedImage(index)}
             className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
               selectedImage === index ? 'ring-2 ring-blue-500' : ''
             }`}
>
<img
               src={image}
               alt={`Product thumbnail ${index + 1}`}
               className="w-full h-full object-cover"
               onError={(e) => {
                 e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
                 e.target.onerror = null;
               }}
             />
</button>
         ))}
</div>
     )}
</div>
 );
};
export default ImageGallery;