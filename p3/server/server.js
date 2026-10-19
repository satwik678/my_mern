
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const cors = require('cors')
const dotenv = require('dotenv')
const User = require('./models/User')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/signupDB')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err.message))

app.get('/api/test', (req, res) => {
  res.json({ message: 'Express API is working' })
})

app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      })
    }

    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      password.length < 8 ||
      password.length > 72
    ) {
      return res.status(400).json({
        message: 'Enter a valid email and a password of 8–72 characters'
      })
    }

    const normalizedEmail = email.trim().toLowerCase()

    const existingUser = await User.findOne({
      email: normalizedEmail
    })

    if (existingUser) {
      return res.status(409).json({
        message: 'An account with this email already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email: normalizedEmail,
      password: hashedPassword
    })

    res.status(201).json({
      message: 'Account created successfully',
      user: {
        id: user._id,
        email: user.email
      }
    })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'An account with this email already exists'
      })
    }

    console.error('Signup error:', error.message)

    res.status(500).json({
      message: 'Server error. Please try again.'
    })
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`)
})
