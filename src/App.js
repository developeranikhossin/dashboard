import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Daily from './pages/Daily';
import Monthly from './pages/Monthly';
import Orders from './pages/Orders';
import Category from './pages/Category';
import ColorList from './pages/ColorList';
import Products from './pages/Products';
import AddColor from './pages/AddColor';
import AddCategory from './pages/AddCategory';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Dashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="overview" element={<Overview />} />
              <Route path="daily" element={<Daily />} />
              <Route path="monthly" element={<Monthly />} />
              <Route path="orders" element={<Orders />} />
              <Route path="category" element={<Category />} />
              <Route path="color-list" element={<ColorList />} />
              <Route path="products" element={<Products />} />
              <Route path="add-color" element={<AddColor />} />
              <Route path="add-category" element={<AddCategory />} />
              <Route path="add-product" element={<AddProduct />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
