require('dotenv').config();
const http = require('http')
const express = require('express')
const cors = require('cors')
const userRoutes = require('./routers/user.route');
const connectToDB = require('./configs/db');

const { PORT } = require('./constants/env');


const app = express()
const server = http.createServer(app);



// db-connection
connectToDB();


app.use(express.json()); 
app.use(cors({ origin: "*" })); // for noww, leaving this for all, Consider restricting origins in production

app.use('/api/auth', userRoutes);

// app.use('/api/places', userRoutes);

 




server.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`)
})