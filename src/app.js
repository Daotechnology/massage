const express = require('express')
const app = express();

// app.use(express.static(path.join(__dirname , 'public')));
app.use(express.static('Public/verifiedmasseur'));


app.get('/', (req,res) =>{
    res.send('Its working');
})


app.listen('3000',()=>{
    console.log('Port Listening on 3000');
});