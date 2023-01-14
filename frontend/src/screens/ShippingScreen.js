import React, {useState} from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'






const ShippingScreen = () => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart


const [address, setAddress] = useState (shippingAddress.address)
const [city, setCity] = useState (shippingAddress.city)
const [postalCode, setPostalCode] = useState (shippingAddress.postalCode)
const [country, setCountry] = useState (shippingAddress.country)
const dispatch = useDispatch()
const navigate = useNavigate()

const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address, city, postalCode, country}))
    navigate('/payment')
}

  return <FormContainer>
    <CheckoutSteps step1 step2 />
    <h1>Shipping</h1>
    <Form onSubmit={submitHandler}>
    <FormGroup controlId='address'>
        <FormLabel>Address </FormLabel>
            <FormControl type='address' placeholder='Enter address' value={address} required
            onChange={(e) => setAddress(e.target.value)}>
            </FormControl>
    </FormGroup>

    <FormGroup controlId='city'>
        <FormLabel>City </FormLabel>
            <FormControl type='city' placeholder='Enter city' value={city} required
            onChange={(e) => setCity(e.target.value)}>
            </FormControl>
    </FormGroup>

    <FormGroup controlId='postalCode'>
        <FormLabel>Postal code </FormLabel>
            <FormControl type='postalCode' placeholder='Enter postal code' value={postalCode} required
            onChange={(e) => setPostalCode(e.target.value)}>
            </FormControl>
    </FormGroup>

    <FormGroup controlId='country'>
        <FormLabel>Country </FormLabel>
            <FormControl type='country' placeholder='Enter country' value={country} required
            onChange={(e) => setCountry(e.target.value)}>
            </FormControl>
    </FormGroup>
    <Button type='submit' >To payment</Button>
    </Form>
  </FormContainer>

  
}

export default ShippingScreen
