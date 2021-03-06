const express = require('express');
const bcrypt = require('bcryptjs');//for hashing the aadhar card

const db = require('../db/connection.js');
const users = db.get('users');
users.createIndex('mobileNumber', {unique : true});//unique mobile no

const router =  express.Router();


router.get('/', (req,res) => {
   res.json({
      message : 'LockKey'
   });  
});


router.get('/signup', (req, res, next) => {  // got getting the data from db
   users
   .find()
   .then(user => {
     res.json(user);
   }).catch(next);
});

router.post('/signup', (req, res, next) => {      // for creating the details
   const result = req.body;
   if(result) {
      users.findOne({
         mobileNumber : req.body.mobileNumber
      }).then(number => {
         if(number) {
            const err = new Error('this number already exist');
            res.status(409);
            next(err);
         }else {
            bcrypt.hash(req.body.aadharCard, 12).then(hashedAadhar => {
               const newUser = {
                  firstname : req.body.firstname,
                  lastname : req.body.lastname,
                  mobileNumber : req.body.mobileNumber,
                  fullAddress : req.body.fullAddress,
                  aadharCard : hashedAadhar
                 };
                 users.insert(newUser).then(insertedUser => {
                  res.json(insertedUser);
               }); 
             });
         }
      });
   }else {
      res.status(422);
      next(result.error);
   }
});


module.exports = router;