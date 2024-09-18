const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/dhinesh', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

const DataSchema = new mongoose.Schema({
    name: String
});

const Data = mongoose.model('Data', DataSchema);

app.get('/api/data', async (req, res) => {
    const data = await Data.find();
    res.json(data);
});

app.listen(3000, () => {
    console.log("Backend service running on port 3000");
});
