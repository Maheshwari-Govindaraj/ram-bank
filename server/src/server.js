const express = require('express');
const bodyParser = require('body-parser');
const { connectMongoDB, connectMySQL } = require('./config/dbConnection');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectMongoDB();
const mysqlConnection = connectMySQL();

app.use(bodyParser.json());
app.use('/account', accountRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
