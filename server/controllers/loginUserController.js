const UserSchema=require('../model/UserSchema');
const mongoose=require('mongoose');



exports.login=async (req,res)=>{
console.log('Login success');
}


exports.signUp=async (req,res)=>
{
 console.log(req.body);
 const newUser= new UserSchema({
    userId:req.body.userId,
    name:req.body.name,
    phoneNo:req.body.phoneNo,
    password:req.body.password,
    city:req.body.city,
    state:req.body.state,
    genere1:req.body.genere1,
    genere2:req.body.genere2,
    genere3:req.body.genere3,
    genere4:req.body.genere4,
    genere5:req.body.genere5
 });

 try{
    await UserSchema.create(newUser);
    res.redirect(`/`);
 }
 catch(error)
 {

 }
}