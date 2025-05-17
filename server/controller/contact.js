const contact = require("../scheme/contact");

const getAllContacts = async (req, res) => {
    try{
        const contacts = await contact.find();
        console.log("Contacts fetched:", contacts);
        res.send(contacts);
    }catch(err){
        console.log(err);
        res.status(500).send("Error loading contacts");
    }
}
const getContactById = async (req, res) => {
    try{
        const contact = await contact.findById(req.params.id);
        if(!contact){
            return res.status(404).send("Contact not found");
        }
        console.log("Contact fetched:", contact);
        res.send(contact);
    }catch(err){
        console.log(err);
        res.status(500).send("Error loading contact");
    }
}
const createContact = async (req, res) => {
    try{
        const contact = new contact(req.body);
        await contact.save();
        console.log("Contact saved:", contact);
        res.status(201).send(contact);
    }catch(err){
        console.log(err);
        res.status(500).send("Error saving contact");
    }
}
const updateContact = async (req, res) => {
    try{
        const contact = await contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!contact){
            return res.status(404).send("Contact not found");
        }
        console.log("Contact updated:", contact);
        res.send(contact);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error updating contact");
    }
}

const deleteContact = async (req, res) => {
    try{
        const contact = await contact.findByIdAndDelete(req.params.id);
        if(!contact){
            return res.status(404).send("Contact not found");
        }
        console.log("Contact deleted:", contact);
        res.send(contact);
    }catch(err){
        console.log(err);
        res.status(500).send("Error deleting contact");
    }
}   


exports.getAllContacts = getAllContacts;
exports.getContactById = getContactById;
exports.createContact = createContact;  
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;