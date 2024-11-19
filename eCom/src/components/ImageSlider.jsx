// src/components/ImageSlider.jsx
import React, { useState } from 'react';
const ImageSlider = ({ images }) => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const goToPrevious = () => {
   const isFirstSlide = currentIndex === 0;
   const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
   setCurrentIndex(newIndex);
 };
 const goToNext = () => {
   const isLastSlide = currentIndex === images.length - 1;
   const newIndex = isLastSlide ? 0 : currentIndex + 1;
   setCurrentIndex(newIndex);
 };
 const goToSlide = (slideIndex) => {
   setCurrentIndex(slideIndex);
 };
 // Handle case where images might be a string containing an array
 const parseImages = (imgs) => {
   if (!imgs) return [];
   if (typeof imgs[0] === 'string') {
     try {
       // Handle cases where the image URL might be wrapped in JSON string
       return imgs.map(img => {
         if (img.startsWith('[')) {
           return JSON.parse(img)[0];
         }
         return img;
       });
     } catch (e) {
       return imgs;
     }
   }
   return imgs;
 };
 const parsedImages = parseImages(images);
 if (!parsedImages.length) return null;
 return (
<div className="relative h-96 w-full">
<div className="absolute top-0 left-0 h-full w-full">
<img
         src={parsedImages[currentIndex]}
         alt={`Slide ${currentIndex}`}
         className="h-full w-full object-contain"
       />
</div>
     {parsedImages.length > 1 && (
<>
<button
           onClick={goToPrevious}
           className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
>
           ←
</button>
<button
           onClick={goToNext}
           className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
>
           →
</button>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
           {parsedImages.map((_, slideIndex) => (
<button
               key={slideIndex}
               onClick={() => goToSlide(slideIndex)}
               className={`h-2 w-2 rounded-full ${
                 currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'
               }`}
             />
           ))}
</div>
</>
     )}
</div>
 );
};

export default ImageSlider;