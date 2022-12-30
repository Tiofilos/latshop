import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req,res) => {
    res.send('API is working fine...')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))