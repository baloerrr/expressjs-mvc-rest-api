const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// initialize db
require("./db_init")()

const ProductRoute = require("./routes/product.routes");
app.use('/product', ProductRoute)


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})