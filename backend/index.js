const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/productList");
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error", err));

app.use("/api/products", productRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});