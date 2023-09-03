require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const { default: mongoose } = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();

})

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db -- use .then as it returns a promise, due to it's slow nature and .catch to handle errors when usn/pswd is wrong
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for requests once we connect to DB
        app.listen(process.env.PORT, ()=>{
            console.log('Connected to DB and Listening on port', process.env.PORT);
        });
    })
    .catch((error)=>{
        console.log(error);
    })




// npm install dotenv
// require it, create a .env file and store port number
// replace the port number 



