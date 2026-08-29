const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running smoothly' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`-- Server is running on port ${PORT} --`);
});

