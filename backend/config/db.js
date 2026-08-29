const mongoose = require("mongoose")

const connectDB = async () => {

    try {
        const connectDB = await mongoose.connect(process.env.MONGODB_URI);
        console.log(` -- MongoDB Connected successfully -- `);

    } catch (error) {

        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1);
    }
};
module.exports = connectDB