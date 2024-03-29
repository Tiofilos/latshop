import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import UserListScreen from './screens/UserListScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import PaymentScreen from './screens/PaymentScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            { <Route path="/login" element={<LoginScreen />} /> }
            { <Route path="/register" element={<RegisterScreen />} /> }
            { <Route path="/profile" element={<ProfileScreen />} /> }
            { <Route path="/shipping" element={<ShippingScreen />} /> }
            { <Route path="/payment" element={<PaymentScreen />} /> }
            { <Route path="/placeorder" element={<PlaceOrderScreen />} /> }
            { <Route path="/admin/userList" element={<UserListScreen />} /> }
            { <Route path="/admin/productList" element={<ProductListScreen />} /> }
            { <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} /> }
          </Routes>
        </Container>
      </main> 
      <Footer />
    </Router>
  );
}

export default App;
