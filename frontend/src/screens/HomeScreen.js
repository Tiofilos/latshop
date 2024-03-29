import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
// import axios from 'axios'

const HomeScreen = () => {
  const dispatch = useDispatch();
  // const[products, setProducts] = useState([])
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
    // const fetchProducts = async () => {
    //   const { data } = await axios.get('/api/products')

    //   setProducts(data)
    // }

    // fetchProducts()
  }, [dispatch]);

  return (
    <>
      <h1> Our latest products</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
