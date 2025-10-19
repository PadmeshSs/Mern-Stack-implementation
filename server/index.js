const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const usermodel = require('./models/user')
const { comparePassword } = require('./hash.js');

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Employee");

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await usermodel.findOne({ email: email });

        if (!user) {
            // Case: No record exists
            return res.status(404).json({ msg: 'No record found' });
        }

        // Check if the password matches
        const ismatch = await comparePassword(password, user.password);
        if (ismatch) {
            // Case: Password matches
            return res.status(200).json({
                user: user,
                msg: 'Success'
            });
        } else {
            // Case: Incorrect password
            return res.status(401).json({ msg: 'Incorrect password' });
        }
    } catch (error) {
        // Handle any server or database errors
        return res.status(500).json({ msg: 'Server error', error: error.message });
    }
});

app.post('/register', async (req, res)=>{
    const {email} = req.body;
    if(await usermodel.findOne({email: email})){
        res.json('data exists')
    }
    usermodel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running"); 
})