const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()) //-> allows us to accress the body

//allows the req.body

//ROUTES//

//get all todos

//get a todo

//create a todo
app.post("/todos", async (req,res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1)",[description]); 
        res.json(newTodo);  
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo

//delete a todo


app.listen(5000, () =>{
    console.log("Server is starting on port 5000");
})