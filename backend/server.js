const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const PORT = 5000;


app.get('/', (req, res) =>{
    res.json("Сървърът работи успешно");
});
app.listen(PORT, (err) =>{
    console.log(`Сървърът е стартиран на порт ${PORT}`);
})
