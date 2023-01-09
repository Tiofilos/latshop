import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile} from '../actions/userActions'



const ProfileScreen = ({}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const location = useLocation ();
    const navigate = useNavigate ();
    const dispatch = useDispatch()

    const userDetails = useSelector ((state) => state.userDetails)
    const { loading, error, user} = userDetails

    const userLogin = useSelector ((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector ((state) => state.userLogin)
    const { success } = userUpdateProfile


    useEffect (() => {
        if (!userInfo){
            navigate('/login')
        } else {
            if(!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
    }
 
    return  <Row>
        <Col md={3}>
        <h2>User Profile</h2>
        {message &&<Message>{message}</Message>}
        {error &&<Message>{error}</Message>}
        {success &&<Message>Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            <FormGroup controlId='name'>
                <FormLabel>Name </FormLabel>
                <FormControl type='name' placeholder='Enter name' value={name}
                onChange={(e) => setName(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup controlId='email'>
                <FormLabel>Email Address</FormLabel>
                <FormControl type='email' placeholder='Enter email' value={email}
                onChange={(e) => setEmail(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup controlId='password'>
                <FormLabel>Password</FormLabel>
                <FormControl type='password' placeholder='Enter password' value={password}
                onChange={(e) => setPassword(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup controlId='confirmPassword'>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl type='confirmPassword' placeholder='Confirm password' value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}></FormControl>
            </FormGroup>

            <Button type ='submit' variant='primary'>
                Update
            </Button>
        </Form>
        </Col>
        <Col md={9}>
            <h2>My orders</h2>
        </Col>
    </Row>
}


export default ProfileScreen
