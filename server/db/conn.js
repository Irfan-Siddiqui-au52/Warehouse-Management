const mongoose = require("mongoose")

const DB = 'mongodb+srv://Irfan234:Irfan1234@cluster0.vnozfqc.mongodb.net/warehouse';
// mongoose.connect('mongodb+srv://Irfan234:Irfan5005@cluster0.vnozfqc.mongodb.net/RestAPI', {useNewUrlParser: true});

mongoose.set('strictQuery', true);
mongoose.connect(DB,{
    // useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})