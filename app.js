require('dotenv').config();
const express =require('express');
const expressLayout=require('express-ejs-layouts');
const connectDB=require('./server/config/db');
const app=express();
const port=5000 || process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');


//Routes
app.use('/login',require('./server/routes/loginUser'));


// app.get('/',(req,res)=>{
//     res.send('hello world');

// });



app.listen(port,()=>{
console.log(`App listening on port ${port}`);;
});


