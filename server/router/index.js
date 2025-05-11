const express = require('express');
const router = express.Router();
const contact = require('../scheme/contact');



router.get('/', async(req, res) => {
  try{
    const contacts = await contact.find();
   console.log(contacts)
  res.json( contacts)
  }catch(err){
    console.log(err)
    res.status(500).send('error loading contacts')
  }
});

// router.post('/contact', async (req, res) => {
//     try{
//         const newContact = new contact(req.body);
//         await newContact.save();
//         res.status(201).json({
//             message: 'Contact created successfully',
//             contact: newContact
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: 'Error creating contact',
//             error: error.message
//         });

//     };
// });


router.post('/', async (req, res) => {
  const users = [
    { firstName: "Grace", lastName: "Chukwu", email: "grace1@example.com", favouriteColor: "Mint", birthday: new Date("1991-12-05"), contact: 8093726154 },
    { firstName: "John", lastName: "Doe", email: "john.doe1@example.com", favouriteColor: "Blue", birthday: new Date("1990-06-15"), contact: 8093726155 },
    { firstName: "Alice", lastName: "Smith", email: "alice.smith1@example.com", favouriteColor: "Red", birthday: new Date("1992-11-20"), contact: 8093726156 },
    { firstName: "Bob", lastName: "Johnson", email: "bob.johnson1@example.com", favouriteColor: "Green", birthday: new Date("1985-04-12"), contact: 8093726157 },
    { firstName: "Charlie", lastName: "Brown", email: "charlie.brown1@example.com", favouriteColor: "Yellow", birthday: new Date("1993-02-10"), contact: 8093726158 },
    { firstName: "David", lastName: "Williams", email: "david.williams1@example.com", favouriteColor: "Purple", birthday: new Date("1990-07-24"), contact: 8093726159 },
    { firstName: "Eve", lastName: "Davis", email: "eve.davis1@example.com", favouriteColor: "Pink", birthday: new Date("1995-09-17"), contact: 8093726160 },
    { firstName: "Frank", lastName: "Miller", email: "frank.miller1@example.com", favouriteColor: "Black", birthday: new Date("1992-12-30"), contact: 8093726161 },
    { firstName: "Grace", lastName: "Taylor", email: "grace.taylor1@example.com", favouriteColor: "White", birthday: new Date("1994-03-07"), contact: 8093726162 },
    { firstName: "Hannah", lastName: "Anderson", email: "hannah.anderson1@example.com", favouriteColor: "Orange", birthday: new Date("1991-01-25"), contact: 8093726163 },
    { firstName: "Ivy", lastName: "Thomas", email: "ivy.thomas1@example.com", favouriteColor: "Brown", birthday: new Date("1988-06-22"), contact: 8093726164 },
    { firstName: "Jack", lastName: "Jackson", email: "jack.jackson1@example.com", favouriteColor: "Grey", birthday: new Date("1992-09-13"), contact: 8093726165 },
    { firstName: "Kathy", lastName: "White", email: "kathy.white1@example.com", favouriteColor: "Silver", birthday: new Date("1990-05-18"), contact: 8093726166 },
    { firstName: "Liam", lastName: "Martinez", email: "liam.martinez1@example.com", favouriteColor: "Gold", birthday: new Date("1993-10-28"), contact: 8093726167 },
    { firstName: "Mia", lastName: "Garcia", email: "mia.garcia1@example.com", favouriteColor: "Bronze", birthday: new Date("1989-08-19"), contact: 8093726168 },
    { firstName: "Nathan", lastName: "Rodriguez", email: "nathan.rodriguez1@example.com", favouriteColor: "Turquoise", birthday: new Date("1991-12-03"), contact: 8093726169 },
    { firstName: "Olivia", lastName: "Wilson", email: "olivia.wilson1@example.com", favouriteColor: "Violet", birthday: new Date("1994-11-01"), contact: 8093726170 },
    { firstName: "Paul", lastName: "Martinez", email: "paul.martinez1@example.com", favouriteColor: "Crimson", birthday: new Date("1992-04-05"), contact: 8093726171 },
    { firstName: "Quincy", lastName: "Lee", email: "quincy.lee1@example.com", favouriteColor: "Indigo", birthday: new Date("1990-02-14"), contact: 8093726172 },
    { firstName: "Rachel", lastName: "Hernandez", email: "rachel.hernandez1@example.com", favouriteColor: "Peach", birthday: new Date("1993-07-11"), contact: 8093726173 }
  ];

  try {
    // Insert all users into the database
    await User.insertMany(users);
    res.status(201).json({ message: '20 users added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = router;