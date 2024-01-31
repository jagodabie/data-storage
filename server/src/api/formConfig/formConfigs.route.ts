import {  Router } from 'express';
import * as FormConfigsController from './formConfigs.controllers';
import { formConfig } from './formConfig.model';
import { validateRequest } from '../../middlewares';

const router = Router();

router.get('/', FormConfigsController.findAll);
router.post('/', validateRequest({
  body: formConfig,
}), FormConfigsController.createOne);


export default router;
