import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
function App() {
 return (
<Router>
<div className="container mx-auto p-4">
<Routes>
<Route path="/" element={<ProductList />} />
<Route path="/product/:productId" element={<ProductDetails />} />
</Routes>
</div>
</Router>
 );
}
export default App;