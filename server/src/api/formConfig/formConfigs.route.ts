import { Router } from 'express';
import {  FormConfigs, TodoWithId } from './formConfig.model';

const router = Router();

router.get<{}, TodoWithId[]>('/', async (req, res) => {
  const result = await FormConfigs.find();
  const formConfigs = await result.toArray();
  res.json(formConfigs);
});



// router.put('/:id', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });

export default router;
