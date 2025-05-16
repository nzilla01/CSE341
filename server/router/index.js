const express = require('express');
const router = express.Router();
const Contact = require('../scheme/contact');


router.use('/doc-link', (docData = (req, res) => {
  let docData = {
  documentationURL: 'https://cse341-dsna.onrender.com',
};
res.send(docData);
}))


// GET all contacts
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
router.get('/:id', async(req, res) => {
  try{
    const contact = await Contact.findById(req.params.id);
    // if(!contact){
    //   return res.status(404).send('Contact not found');
    // }
    console.log('Contact fetched:', contact)
    res.send(contact);
  }catch(err){
    console.log(err)
    res.status(500).send('error loading contact')
  }
});

// post contact
router.post('/', async(req, res) => {
  try{
    const contact = new Contact(req.body);
    await contact.save();
    console.log('Contact saved:', contact)
    res.status(201).send(contact);
  }catch(err){
    console.log(err)
    res.status(500).send('error saving contact')
  }
});

// delete contact
router.delete('/:id', async(req, res) => {
  try{
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
      return res.status(404).send('Contact not found');
    }
    console.log('Contact deleted:', contact)
    res.send(contact);
  }catch(err){
    console.log(err)
    res.status(500).send('error deleting contact')
  }
});

//put contact
router.put('/:id', async(req, res) => {
  try{
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!contact){
      return res.status(404).send('Contact not found');
    }
    console.log('Contact updated:', contact)
    res.send(contact);
  }catch(err){
    console.log(err)
    res.status(500).send('error updating contact')
  }
});


module.exports = router;