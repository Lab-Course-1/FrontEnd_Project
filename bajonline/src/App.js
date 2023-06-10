import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopAll from "./Pages/ShopAll/ShopAll";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import OurStory from "./Pages/OurStory/OurStory";
import Oops from "./Pages/Components/Oops/Oops";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Admin/Settings/Settings";
import DbEntities from "./Pages/Admin/DbEntities/DbEntities";
import Categories from "./Pages/Admin/DbEntities/Categories/Categories";
import CartItem from "./Pages/Admin/DbEntities/CartItem/CartItem";
import OrderData from "./Pages/Admin/DbEntities/OrderData/OrderData";
import AddressDetails from "./Pages/Admin/DbEntities/AddressDetails/AddressDetails";
import Dashboards from "./Pages/Admin/Dashboards/Dashboards";
import Reports from "./Pages/Admin/Reports/Reports";
import Analytics from "./Pages/Admin/Analytics/Analytics";
import Users from "./Pages/Admin/Users/Users";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage/ShoppingCart";
import { ReactNotifications } from "react-notifications-component";

function App() {
  return (
    <>
      {/* <ReactNotifications /> // todo: fix */ }
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/shopall" element={<ShopAll />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/ourstory" element={<OurStory />} exact />
          <Route path="*" element={<Oops />} />
          <Route path="/admin/settings" element={<Settings />} exact />
          <Route path="/admin/reports/" element={<Reports />} exact />
          <Route path="/admin/analytics" element={<Analytics />} exact />
          <Route path="/admin/dbentities" element={<DbEntities />} exact />
          <Route path="/admin/dbentities/categories" element={<Categories />} exact />
          <Route path="/admin/dbentities/cartItem" element={<CartItem />} exact />
          <Route path="/admin/dbentities/orderData" element={<OrderData />} exact />
          <Route path="/admin/dbentities/addressDetails" element={< AddressDetails/>} exact />
          <Route path="/admin/dashboards" element={<Dashboards />} exact />
          <Route path="/admin/users" element={<Users />} exact />
          <Route path="/productpage" element={<ProductPage />} exact />
          <Route path="/shoppingcartpage" element={<ShoppingCartPage />} exact />
        </Routes>
      </Router>
    </>
  );
}
export default App;
