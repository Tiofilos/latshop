import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Table, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts, deleteProduct} from '../actions/productActions'
import { useNavigate } from 'react-router-dom'


const ProductListScreen = () => {
    const dispatch = useDispatch ()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    const productDelete = useSelector((state) => state.productList)
    const { loading:loadingDelete, error:errorDelete, success:successDelete } = productDelete

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const navigate = useNavigate ()

    useEffect(() => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(listProducts())
        } else {
            navigate('/login')
        }
       
    }, [dispatch, navigate, userInfo, successDelete])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete product?')){
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = (product) => {

    }

  return (
    <>
        <Row className='align-items-center'>
            <Col>
                <h1>
                    Products
                </h1>
            </Col>
            <Col className='text-right'>
                <Button className='my-3' onClick={createProductHandler}>
                    <i classname='fas fa-plus'>Add Product</i> 
                </Button>
            </Col>
        </Row>
        {loadingDelete && <Loader/>}
        {errorDelete && <Message>{errorDelete}</Message>}
      {loading ? (
      <Loader /> 
      ) : error ? (
      <Message>{error}</Message>
      ): (
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                <Button className='btn-sm'>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button className='btn-sm' onClick={() =>
                            deleteHandler(product._id)}>
                                <i className='fas fa-trash'>

                                </i>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
      )}  
    </>
  )
}


export default ProductListScreen