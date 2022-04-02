require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDb = require("./database/mongodb");
const articles = require("./routes/articles");
const practices = require("./routes/practices");

// Connect MongoDB Atlas
connectDb();

// Use middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
})

app.use("/api/articles", articles);
app.use("/api/practices", practices);

// Listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

