const express = require("express")
const app = express();
const route = require("./router/router")
const PORT = 4000;

app.use(express.json());

app.use("/api",route);

app.listen(PORT, ()=>{
    console.log("Server running on port ", PORT);
})


