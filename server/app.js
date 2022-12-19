const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const stripe = require("stripe")("sk_test_51KR8R1SIj9g28rKLWw3NkPxy6e2884LkTEP6CdRZR6Pn6REfp9mZqzdZ4iyDMkJSI8o7MxQw3nPxAb0HZNc3ogOk00nzvVDW6y")
const PORT = 5000;
const jwt = require("jsonwebtoken");
const app = express();
const spawner = require('child_process').spawn;

const bodyParser = require("body-parser")
const cors = require("cors")
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())

app.use(cookieParser());
app.use(express.json());
app.use(require("./router/auth"));

require("./db/conn");
dotenv.config({path : './config.env'});


app.post('/payment', cors(), async (req, res) => {
    let {amount, id} = req.body;
    amount = amount * 100;
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency : "INR",
            description : "Fees paid",
            payment_method : id,
            confirm : true
        })
        console.log("Payemnt ", payment)
        res.json({
            message : "Payment Successful",
            success : true
        })
    }catch(error){
        console.log("Error ", error)
        res.json({
            message : "Payment Failed",
            success : false
        })
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/attendance', (req, res) => {
    const child = spawner('python', ['C:/Users/HarshGupta/Desktop/SE-Project/server/face.py']);
    child.stdout.on('data', (data) => {
        console.log(`stdout : ${data}`);
    });
    child.stderr.on('data', (data) => {
        console.error(`stderr : ${data}`);
    });
    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    const child1 = spawner('python', ['C:/Users/HarshGupta/Desktop/SE-Project/server/last_row.py']);
    child1.stdout.on('data', (data) => {
        console.log(`stdout : ${data}`);
    });
    child1.stderr.on('data', (data) => {
        console.error(`stderr : ${data}`);
    });
    child1.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    }); 
    res.json({"message" : "run successfully"});
})

app.listen(5000, () =>{ 
    console.log(`server is running on port ${PORT}`);
});
