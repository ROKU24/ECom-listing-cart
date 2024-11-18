import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
const ShoppingCart = () => {
 const { items, total } = useSelector((state) => state.cart);
 const dispatch = useDispatch();
 return (
<div className="p-6">
<h1 className="text-2xl font-semibold">Shopping Cart</h1>
     {items.length === 0 ? (
<p className="mt-4">Your cart is empty.</p>
     ) : (
<div>
         {items.map((item) => (
<div key={item.id} className="flex justify-between items-center mt-4">
<img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover" />
<h3>{item.title}</h3>
<p>${item.price} x {item.quantity}</p>
<button
               className="text-red-500"
               onClick={() => dispatch(removeFromCart(item))}
>
               Remove
</button>
</div>
         ))}
<h2 className="text-lg font-semibold mt-4">Total: ${total.toFixed(2)}</h2>
</div>
     )}
</div>
 );
};
export default ShoppingCart;