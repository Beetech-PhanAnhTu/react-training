const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');
const chatRoute = require('./Routes/chatRoute');
const messageRoute = require('./Routes/messageRoute');

const app = express();
require('dotenv').config();

const corsOptions = {
    origin:'http://localhost:9000',
    credentials: true, // Allow credentials (cookies, HTTP authentication),
};
app.use(express.json());
// app.use(cors());
app.use(cors(corsOptions));

//config route
app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

app.get('/', (req, res) => {
    res.send("Welcome our chat");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log("server running on port: " + port);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connection established"))
.catch((error) => console.log("MongoDB connection error: " + error.message));