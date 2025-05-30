const Contact = require("../scheme/contact");

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log("Contacts fetched:", contacts);
        res.send(contacts);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading contacts");
    }
};

const getContactById = async (req, res) => {
    try {
        const foundContact = await Contact.findById(req.params.id);
        if (!foundContact) {
            return res.status(404).send("Contact not found");
        }
        console.log("Contact fetched:", foundContact);
        res.send(foundContact);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading contact");
    }
};

const createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        console.log("Contact saved:", newContact);
        res.status(201).send(newContact);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error saving contact");
    }
};

const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).send("Contact not found");
        }
        console.log("Contact updated:", updatedContact);
        res.send(updatedContact);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error updating contact");
    }
};

const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).send("Contact not found");
        }
        console.log("Contact deleted:", deletedContact);
        res.send(deletedContact);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting contact");
    }
};

exports.getAllContacts = getAllContacts;
exports.getContactById = getContactById;
exports.createContact = createContact;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;
