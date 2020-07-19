import express from 'express';

import indexRouter from './index';
import businessRouter from './business';

const router = express.Router();

router.use('/', indexRouter);
router.use('/business', businessRouter);

export default router;
