const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const UserSchema2 =new Schema({
    userId:{
        type:String,
        required:true
    },name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        index:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    genere1:{
        type:String,
        required:true
    },
    genere2:{
        type:String,
        required:true
    },
    genere3:{
        type:String,
        required:true
    },
    genere4:{
        type:String,
        required:true
    },
    genere5:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:
    {
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model('UserSchema',UserSchema2);
