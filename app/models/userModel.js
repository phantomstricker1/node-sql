const db = require('../config/db');

const User = {
    create: (name, pass, role, callback) => {
        const query = 'INSERT INTO users (name, pass, role) VALUES (?, ?, ?)';
        const values = [name, pass, role];

        db.query(query, values, (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    },

    findAll: (callback) => {
        const query = 'SELECT id, name, role FROM users'; // Exclude 'pass' for security reasons

        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = User;
