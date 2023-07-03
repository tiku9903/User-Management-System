const mongoose=require('mongoose');
var url = "mongodb+srv://patilpratik9903:tiku@cluster0.gczb9ec.mongodb.net/"


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
      });
      console.log(`MongoDB connecteed: ${conn.connection.host}`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;


module.exports=connectDB