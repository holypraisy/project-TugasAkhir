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

function App() {
  return (  
    <div className=" flex flex-col overflow-hidden bg-white">

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} /> 
          <Route path="register" element={<AuthRegister />} /> 
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashboard />} /> 
          <Route path="features" element={<AdminFeatures />} /> 
          <Route path="orders" element={<AdminOrders />} /> 
          <Route path="products" element={<AdminProducts />} /> 
        </Route>

        <Route path="shop" element= {<UserLayout/>}>
          <Route path="*" element = {<NotFound/>} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
