const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://salmankhan:%40Bitcoin_2992@cluster0.xctgdbh.mongodb.net/gym_management?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;