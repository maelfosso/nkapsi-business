import express from 'express';
import business from '../controllers/business.controller';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', business.create);

export default router;
