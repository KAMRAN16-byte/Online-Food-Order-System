const express = require('express')
const app = express()
const userAuthorization = require('./utils/userAuthorization')
const foodRouter = require('./routes/food')
const userAuthentication = require('./routes/user')
const orderRouter = require('./routes/order')
const cors = require('cors')

app.use(cors())
app.use('/foodimage',express.static('uploads/'))
app.use(userAuthorization)
app.use(express.json())
app.use('/food',foodRouter)
app.use('/user',userAuthentication)
app.use('/order',orderRouter)

app.listen(8000,'localhost',()=>{
    console.log("Server started on port 8000")
})