const express = require('express')
const dotenv = require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 7000

// routes
app.get("/", (req,res) => {
   res.status(200)
})

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))