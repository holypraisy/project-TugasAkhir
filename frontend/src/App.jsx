import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/authLayout.jsx";
import AuthLogin from "./pages/auth/login.jsx";
import AuthRegister from "./pages/auth/register.jsx";
import AdminLayout from "./components/admin/layoutAdmin.jsx";
import AdminDashboard from "./pages/admin/dashboard.jsx";
import AdminFeatures from "./pages/admin/features.jsx";
import AdminOrders from "./pages/admin/orders.jsx";
import AdminProducts from "./pages/admin/products.jsx";
import UserLayout from "./components/user/userLayout.jsx";
import NotFound from "./pages/not-found/index.jsx";
import UserAccount from "./pages/user/account.jsx";
import CheckoutProducts from "./pages/user/checkout.jsx";
import HomePage from "./pages/user/home.jsx";
import Listing from "./pages/user/listing.jsx";
import CheckAuth from "./components/common/check-auth.jsx";
import UnauthPage from "./pages/unauth-page/index.jsx";

function App() {
  const isAuthenticated = false ;
  const user = null;


  return (  
    <div className=" flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
             <AuthLayout /> 
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} /> 
          <Route path="register" element={<AuthRegister />} /> 
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} /> 
          <Route path="features" element={<AdminFeatures />} /> 
          <Route path="orders" element={<AdminOrders />} /> 
          <Route path="products" element={<AdminProducts />} /> 
        </Route>

        <Route path="/shop" element= {
          <CheckAuth isAuthenticated = {isAuthenticated} user={user}>
            <UserLayout/>
          </CheckAuth>
        }>
          <Route path="account" element={<UserAccount />} />
          <Route path="checkout" element={<CheckoutProducts />} /> 
          <Route path="home" element={<HomePage />} /> 
          <Route path="listing" element={<Listing />} />  
          
        </Route>

        <Route path="/unauth-page" element = {<UnauthPage/>} />
        <Route path="*" element = {<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
