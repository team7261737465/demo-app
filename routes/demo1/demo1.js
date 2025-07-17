
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/demo1', (req, res) => {
  console.log("Hello from demo1");
  res.render('demo1/index', { title: 'Demo 1', heading: 'Hello from demo1' });
});

module.exports = router;
