
const express = require('express');
const router = express.Router();
router.get('/demo2', (req, res) => {
  console.log("Hello from demo2");
  res.render('demo2/index', { title: 'Demo 2', heading: 'Hello from demo2' });
});

module.exports = router;
