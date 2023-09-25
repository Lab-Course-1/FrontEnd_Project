
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopAll from "./Pages/ShopAll/ShopAll";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import OurStory from "./Pages/OurStory/OurStory";
import Oops from "./Pages/Components/Oops/Oops";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Admin/Settings/Settings"; // Admin settings
import ProfileSettings from "./Pages/ProfileSettings/ProfileSettings";
import DbEntities from "./Pages/Admin/DbEntities/DbEntities";
import Categories from "./Pages/Admin/DbEntities/Categories/Categories";
import CartItem from "./Pages/Admin/DbEntities/CartItem/CartItem";
import AddressDetails from "./Pages/Admin/DbEntities/AddressDetails/AddressDetails";
import OrderDetails from "./Pages/Admin/OrderDetails/OrderDetails";
import Products from "./Pages/Admin/DbEntities/Product/Products";
import AddProduct from "./Pages/Admin/DbEntities/Product/AddProduct";
import EditProduct from "./Pages/Admin/DbEntities/Product/EditProduct";
import ProductOrderDetails from "./Pages/Admin/DbEntities/ProductOrderDetails/ProductOrderDetails";
import WishListItem from "./Pages/Admin/DbEntities/WishListItem/WishListItem";
import Dashboards from "./Pages/Admin/Dashboards/Dashboards";
import Reports from "./Pages/Admin/Reports/Reports";
import Analytics from "./Pages/Admin/Analytics/Analytics";
import Users from "./Pages/Admin/Users/Users";
import AddUser from "./Pages/Admin/Users/AddUser";
import EditUser from "./Pages/Admin/Users/EditUser";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage/ShoppingCart";
import Completed from "./Pages/CompletedPage/Completed";
import WishList from "./Pages/WishList/WishList";
import OrderModal from "./Pages/OrderModal/OrderModal";
import React, { useState } from 'react';
import Orders from "./Pages/Admin/Orders/Orders";
import MyOrders from "./Pages/MyOrders/MyOrders";
import CreateOrder from "./Pages/Admin/CreateOrder/CreateOrder";
import { ReactNotifications } from "react-notifications-component";
import { AppContext } from "./AppContext"
import 'react-notifications-component/dist/theme.css'
// DbEntities
import Apartamenti57646s from "./Pages/Admin/DbEntities/Apartamenti57646s/Apartamenti57646s";
import AddApartamenti57646 from "./Pages/Admin/DbEntities/Apartamenti57646s/AddApartamenti57646"
import EditApartamenti57646 from "./Pages/Admin/DbEntities/Apartamenti57646s/EditApartamenti57646";

import Ndertesa57646s from "./Pages/Admin/DbEntities/Ndertesa57646s/Ndertesa57646s";
import AddNdertesa57646 from "./Pages/Admin/DbEntities/Ndertesa57646s/AddNdertesa57646"
import EditNdertesa57646 from "./Pages/Admin/DbEntities/Ndertesa57646s/EditNdertesa57646";
import AddCategory from "./Pages/Admin/DbEntities/Categories/AddCategory";
import EditCategory from "./Pages/Admin/DbEntities/Categories/EditCategory";
import Reviews from "./Pages/Admin/DbEntities/Reviews/Reviews";
import AddReview from "./Pages/Admin/DbEntities/Reviews/AddReview";
import EditReview from "./Pages/Admin/DbEntities/Reviews/EditReview";
import Promotions from "./Pages/Admin/DbEntities/Promotion/Promotions";
import AddPromotion from "./Pages/Admin/DbEntities/Promotion/AddPromotion";
import EditPromotion from "./Pages/Admin/DbEntities/Promotion/EditPromotion";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <AppContext.Provider value={{ isLoading, setIsLoading }}>
        <ReactNotifications />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/shopall" element={<ShopAll />} />
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
            <Route path="/admin/dbentities/addcategory" element={<AddCategory />} exact />
            <Route path="/admin/dbentities/editcategory/:id" element={<EditCategory />} />
            <Route path="/admin/dbentities/reviews" element={<Reviews />} exact />
            <Route path="/admin/dbentities/addreview" element={<AddReview />} exact />
            <Route path="/admin/dbentities/editreview/:id" element={<EditReview />} />
            <Route path="/admin/dbentities/promotions" element={<Promotions />} exact />
            <Route path="/admin/dbentities/addpromotion" element={<AddPromotion />} exact />
            <Route path="/admin/dbentities/editpromotion/:id" element={<EditPromotion />} />
            <Route path="/admin/dbentities/cartItem" element={<CartItem />} exact />
            <Route path="/admin/dbentities/addressDetails" element={< AddressDetails />} exact />
            <Route path="/create-order" element={<CreateOrder />} exact />
            <Route path="/admin/orders" element={<Orders />} exact />
            <Route path="/admin/order-details/:id" element={< OrderDetails />} />
            <Route path="/admin/dbentities/products" element={< Products />} exact />
            <Route path="/admin/dbentities/addproduct" element={<AddProduct />} />
            <Route path="/admin/dbentities/editproduct/:id" element={<EditProduct />} />
            <Route path="/admin/dbentities/productOrderDetails" element={< ProductOrderDetails />} exact />
            <Route path="/admin/dbentities/wishListItem" element={< WishListItem />} exact />
            <Route path="/admin/dashboards" element={<Dashboards />} exact />
            <Route path="/profile" element={<ProfileSettings />} exact />
            <Route path="/my-orders" element={<MyOrders />} exact />
            <Route path="/orderModal" element={<OrderModal />} exact />
            <Route path="/productpage" element={<ProductPage />} exact />
            <Route path="/shoppingcartpage" element={<ShoppingCartPage />} exact />
            <Route path="/completed" element={<Completed />} exact />
            <Route path="/wishlist" element={<WishList />} exact />
            <Route path="/admin/users" element={<Users />} exact />
            <Route path="/admin/adduser" element={<AddUser />} />
            <Route path="/admin/edituser/:id" element={<EditUser />} />
            {/* Entities */}

            <Route path="/admin/dbentities/apartamenti57646s" element={<Apartamenti57646s />} />
            <Route path="/admin/dbentities/addapartamenti57646" element={<AddApartamenti57646 />} />
            <Route path="/admin/dbentities/editapartamenti57646/:id" element={<EditApartamenti57646 />} />

            <Route path="/admin/dbentities/ndertesa57646s" element={<Ndertesa57646s />}  />
            <Route path="/admin/dbentities/addndertesa57646" element={<AddNdertesa57646 />} />
            <Route path="/admin/dbentities/editndertesa57646/:id" element={<EditNdertesa57646 />} />

          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}
export default App;
