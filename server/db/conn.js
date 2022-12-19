const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://harsh:codemongopassword@cluster0.bp0zspw.mongodb.net/software?retryWrites=true&w=majority", {
}).then(() => {
    console.log(`connection is successful`);
}).catch((err) => {
    console.log(`connection is failed`);
});