import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
const Cart = () => {
 const { items, total } = useSelector(state => state.cart);
 const dispatch = useDispatch();
 return (
<div className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
     {items.length === 0 ? (
<p>Your cart is empty</p>
     ) : (
<>
<div className="space-y-4">
           {items.map(item => (
<div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
<img
                 src={item.images[0]}
                 alt={item.title}
                 className="w-24 h-24 object-cover rounded"
               />
<div className="flex-1">
<h3 className="text-lg font-semibold">{item.title}</h3>
<p className="text-gray-600">${item.price}</p>
<div className="flex items-center gap-2 mt-2">
<label>Quantity:</label>
<select
                     value={item.quantity}
                     onChange={(e) =>
                       dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                     }
                     className="border rounded px-2 py-1"
>
                     {[1, 2, 3, 4, 5].map(num => (
<option key={num} value={num}>
                         {num}
</option>
                     ))}
</select>
</div>
</div>
<button
                 onClick={() => dispatch(removeFromCart(item.id))}
                 className="text-red-600 hover:text-red-800"
>
                 Remove
</button>
</div>
           ))}
</div>
<div className="mt-8 text-right">
<p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
</div>
</>
     )}
</div>
 );
};
export default Cart;