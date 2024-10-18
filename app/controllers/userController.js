const User = require('../models/userModel');

exports.saveUser = (req, res) => {
    const { name, pass, role } = req.body;

    if (!name || !pass || !role) {
        return res.status(400).send('Please provide name, pass, and role');
    }

    User.create(name, pass, role, (err, result) => {
        if (err) {
            console.error('Error saving data: ', err);
            return res.status(500).send('Error saving data');
        }

        res.status(200).send('Data saved successfully');
    });

};

exports.getAllUsers = (req, res) => {
    User.findAll((err, results) => {
        if (err) {
            console.error('Error retrieving data: ', err);
            return res.status(500).send('Error retrieving data');
        }

        res.status(200).json(results);
    });

};