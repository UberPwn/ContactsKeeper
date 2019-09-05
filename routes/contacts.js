const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @decs    Get all users contacts
// @access  Private

router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @decs    Add new contacts
// @access  Private

router.post('/', (req, res) => {
  res.send('Add new concact');
});

// @route   PUT api/contacts/:id
// @decs    Update contact
// @access  Private

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts/:id
// @decs    Detete contact
// @access  Private

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
