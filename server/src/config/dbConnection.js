const mongoose = require('mongoose');
const mysql = require('mysql2');

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

const connectMySQL = () => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });

    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to MySQL:', error);
            return;
        }
        console.log('Connected to MySQL');
    });

    return connection;
};

module.exports = { connectMongoDB, connectMySQL };
