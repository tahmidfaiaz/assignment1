const express = require('express');
const router = express.Router();
const path = require('path');

// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});
router.get('/services', (req, res) => {
  res.render('services', { title: 'services' });
});
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact' });
});
router.get('/cv', (req, res) => {
  const pdfPath = path.join(
    __dirname,
    '../',
    'public',
    'files',
    'cv.pdf'
  );
  res.sendFile(pdfPath);
});
// Add similar routes for Projects, Services, and Contact Me pages

module.exports = router;
