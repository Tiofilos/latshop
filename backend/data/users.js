import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@blabla.com',
        password:  bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'tunde tunde',
        email: 'tunde@blabla.com',
        password:  bcrypt.hashSync('123456', 10),
    },
    {
        name: 'ola ola',
        email: 'ola@blabla.com',
        password:  bcrypt.hashSync('123456', 10),
    }
]

export default users