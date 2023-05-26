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
        required:true
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
        type:Date
    },
    updatedAt:
    {
        type:Date
    }
});

module.exports=mongoose.model('UserSchema',UserSchema2);
