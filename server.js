// Setup empty JS object to act as endpoint for all routes
projectData = [];
const port = 8000;
// Require Express to run server and routes
const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const cors          = require('cors');
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Routes
app.get('/all',(req,res)=>{
    console.log(projectData);
    res.send(projectData);
});

app.post('/all',(req,res)=>{
    
    newEntry = {
        temp: req.body.temp,
        date : req.body.date,
        feelings : req.body.feelings
    }
    projectData.push(newEntry);

});


// Setup Server
app.listen(port,()=>{
    console.log(`running on localhost: ${port}`);
})