const express = require('express');
const env = require('dotenv');
const morgan = require('morgan');
env.config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('tiny'))
app.get('/', (req, res, next) => {
    res.status(200).json({message:'Server is Okay!'})
})


app.listen(PORT, function(){
    console.log('App listening on port: '+PORT);
})




