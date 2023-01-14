import React, {useState} from 'react'
import { Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import { Form, Button, Col, FormGroup, FormControl, FormLabel, FormCheck } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { savePaymentMethod } from '../actions/cartActions'






const PaymentScreen = () => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    const navigate = useNavigate()

    if(!shippingAddress) {
        navigate('/shipping')
    }


const [paymentMethod, setPaymentMethod] = useState ('paypal')

const dispatch = useDispatch()

const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
}

  return <FormContainer>
    <CheckoutSteps step1 step2 step3 />
    <h1>Payment</h1>
    <Form onSubmit={submitHandler}>
    
    <FormGroup controlId='country'>
        <FormLabel as='legend'>Select Payment Method</FormLabel>
    
    <Col>
        <FormCheck 
        type='radio' 
        label='PayPal or Credit Card' 
        id='PayPal'
        name='paymentMethod' 
        value='PayPal' 
        checked 
        onChange={(e) => setPaymentMethod(e.target.value)} >
        </FormCheck>

        <FormCheck 
        type='radio' 
        label='Stripe' 
        id='Stripe'
        name='paymentMethod' 
        value='Stripe' 
        checked 
        onChange={(e) => setPaymentMethod(e.target.value)} >
        </FormCheck>


    </Col>
    <Button type = 'submit' >To Checkout</Button>
    </FormGroup>
    </Form>
  </FormContainer>

  
}

export default PaymentScreen
