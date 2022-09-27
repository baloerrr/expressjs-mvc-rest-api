const mongoose = require("mongoose");

module.exports = () => {
    mongoose
    .connect(process.env.MONGODB_URI, {
        dbName: "data_mahasiswa", 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).
    then(() => {
        console.log("Databasa Connected...");
    }).
    catch(err => {
        console.log("Cannot connect to database...", err)
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
      });
    
      mongoose.connection.on('error', err => {
        console.log(err.message);
      });
    
      mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
      });
    
      process.on('SIGINT', () => {
        mongoose.connection.close(() => {
          console.log(
            'Mongoose connection is disconnected due to app termination...'
          );
          process.exit(0);
        });
      });
}