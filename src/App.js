import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {Routes,Route, Router, BrowserRouter} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/shop" element={<Shop/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/review" element={<Review/>} />
          <Route exact path="/" element={<Shop/>} />
          <Route path="product/:productId" element={<ProductDetail/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
