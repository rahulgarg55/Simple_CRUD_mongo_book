const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bookRoute=require('./routes/bookRoutes');

const dotenv=require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
useNewUrlParser:true,
useUnifiedTopology:true,
}).then(()=>console.log("mongodb connected..."))
.catch((err=>console.log(err)));

app.use(express.json());


app.use('/api/books',bookRoute);


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server is listening on PORT ${PORT}`));

