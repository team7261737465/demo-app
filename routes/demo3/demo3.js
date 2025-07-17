
const express = require('express');
const router = express.Router();
router.get('/demo3', (req, res) => {
  console.log("Hello from demo3");
  res.render('demo3/index', { title: 'Demo 3', heading: 'Hello from demo3' });
});

module.exports = router;
