const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://anjani:Reddy1234@cluster0.oucvqdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology : true,
   
}).then(()=>console.log('Connected'))
.catch(err=>{
    console.log('Connection error',err.message);
});

const sellerSchema = new mongoose.Schema({
    semail:{
        type:String,
        required : true,
        unique :true,
    },
    sname :{
        type : String,
        required: true,
    },
    spassword :{
        type : String,
        required : true,
    },
    srole:{
        type : String,
        required : true,
    },
});

const Seller = mongoose.model('seller',sellerSchema);

app.post('/login' , async(req,res)=>{
    const {email , password} = req.body;
    try{
        const seller = await Buyer.findOne({email});
        
        if(seller.password !== password)
            return res.status(404).json({message:'invalid Credentails'});

        return res.json(seller);


        
    }catch(error){
        console.log('error in login',error);

    }
});

const buyerSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique:true,
    },
    name:{
        type : String,
        required : true,
    },
    role:{
        type :String,
        default: 'buyer',

    },
    password:{
        type : String,
        required: true,
    },

});

const Buyer = mongoose.model('buyer',buyerSchema);

app.post('/register',async(req,res)=>{

    try{
    const {email,name,role,password} = req.body;
    const newBuyer = new Buyer({
        email ,
        name,
        role,
        password,
    });
    await newBuyer.save();
    res.json('User registered Succcessfully');
    
}catch(error){
    console.log(error);
}



});

const PORT = 2004;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

