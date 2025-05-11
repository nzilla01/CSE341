const express = require('express');
const router = express.Router();
const Contact = require('../scheme/contact');

router.get('/', async(req, res) => {
  try{
    const contacts = await Contact.find();
   console.log('Contacts fetched:', contacts)
  res.send(contacts);
  }catch(err){
    console.log(err)
    res.status(500).send('error loading contacts')
  }
});

module.exports = router;