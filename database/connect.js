const mongoose = require('mongoose');
require('dotenv').config()
function connect() {
    mongoose.connect(process.env.MONGODB_Fitness, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
}
module.exports= {
    connect,
}