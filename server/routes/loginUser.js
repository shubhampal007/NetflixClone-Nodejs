const express=require('express');
const router=express.Router();
const loginUserController=require('../controllers/loginUserController');

router.get('/',loginUserController.login);
router.post('/signUp',loginUserController.signUp);



module.exports=router;