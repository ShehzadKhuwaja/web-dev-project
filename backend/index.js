const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const { connectDB } = require('./src/config/db')

const homeRoute = require('./src/routes/home')
const adminRoute = require('./src/routes/admin')
const loginRoute = require('./src/routes/login')
const employerRoute = require('./src/routes/employer')
const employeeRoute = require('./src/routes/employee')

connectDB()

app.use(express.json())

app.use('/', homeRoute);
app.use('/admin', adminRoute);
app.use('/login', loginRoute);
app.use('/employer', employerRoute); //provider
app.use('/employee', employeeRoute) //worker

//app.use('/jobs')

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
