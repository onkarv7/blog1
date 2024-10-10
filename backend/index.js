const express = require("express");
const cors = require("cors"); // Import the cors package
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
