import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import formConfigs from './formConfig/formConfigs.route';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/form-configs', formConfigs);

export default router;
