const mongoose = require("mongoose");

const connectionUrl = process.env.MONGODB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(connectionUrl);
        console.log("Succesfully connected to MongoDB.");
    } catch(err) {
        console.error(`Failed to connect to MongoDB: ${err.message}`);
    }
}

module.exports = connectDb;
