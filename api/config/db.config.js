const mongoose = require('mongoose');

const DB_NAME = 'quizzplomatic';
const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_URI = `${URI}/${DB_NAME}`;

mongoose
    .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.info(`Successfully connected to the database ${DB_URI}.`))
    .catch(error => {
        console.error(`An error ocurred when trying to connect to the database ${DB_URI}.`, error);
        process.exit(0);
    });


process.on('SIGINT', function () {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected on app termination.');
        process.exit(0);
    })
})