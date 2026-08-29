const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
const authRoutes = require("./routes/authRoutes")
dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/auth" , authRoutes)
app.use("/api/products" , productRoutes)


app.listen(PORT, () => {
  console.log(`-- Server is running on port ${PORT} --`);
});

