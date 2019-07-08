'use strict';

const express = require('express');
const router = express.Router();

const DATABASE = {};

// GET all employees
router.get('/', function (req, res) {
    return res.send(DATABASE);
});

// GET employee by id
router.get('/:id', function (req, res) {
    
});

// POST new employee
router.post('/', function (req, res) {

});

// PUT (Update) an employee
router.put('/:id', function (req, res) {

});

// DELETE an employee
router.delete('/:id', function (req, res) {

});




module.exports = router;
