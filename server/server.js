const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db")

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express()

connectDB()

app.use(cors());
app.use(express.json())

app.get("/", (req,res)=>{
    res.json({
        message:"product management API is running",
    });
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})