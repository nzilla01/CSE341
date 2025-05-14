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


//  GET contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send('Contact not found');
    }
    console.log('Contact fetched:', contact);
    res.send(contact);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching contact by ID');
  }
});
module.exports = router;