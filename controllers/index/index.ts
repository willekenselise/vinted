import express from 'express'
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  console.log('controller index index')
  res.send('controller index index')
});

export default router
