const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Сървърът е стартиран на порт ${PORT}`);
})
