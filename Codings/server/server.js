const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://thegr8malith:<db_password>@cluster.fjcsqyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';

mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));