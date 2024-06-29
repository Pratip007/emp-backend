const mongoose = require('mongoose');

async function connectMongoDB (url){
    // Connect to MongoDB
 return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

module.exports ={
 connectMongoDB
};