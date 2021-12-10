const express = require('express')
const app = express();
//require ENVIRONMENT VARIABLE
require('dotenv').config();
const port = process.env.PORT;

// app.use(express.static(path.join(__dirname , 'public')));
app.use(express.static('Public/web'));


app.get('/', (req,res) => {
    res.send('Its working');
});

app.listen(port,()=>{
    console.log(`Port Listening on ${port}`);
});