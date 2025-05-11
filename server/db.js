const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const con = await mongoose.connect(process.env.MONGO_URI,)
    console.log(`MongoDB connected ${con.connection.host}`);
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;