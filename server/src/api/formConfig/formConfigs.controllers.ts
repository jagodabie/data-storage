import { NextFunction, Request, Response } from 'express';
import { FormConfig, FormConfigWithId, FormConfigs, formConfig } from './formConfig.model';

export const findAll = async ( _ :Request, res:Response<FormConfigWithId[]>, next: NextFunction) => {
  try {
    const result = await FormConfigs.find();
    const formConfigs = await result.toArray();
    res.json(formConfigs);
  } catch (error) {
    next(error);
  }
};

export const createOne = async (req: Request< {}, FormConfigWithId, FormConfig>, res: Response, next: NextFunction) => {
  try {
    const validateResult = await formConfig.parse(req.body);
    const insertResult = await FormConfigs.insertOne(validateResult);
    if (!insertResult.acknowledged) throw new Error('Insert not acknowledged');  
    res.status(201);
    res.json({
      _id: insertResult.insertedId,
      ...validateResult,
    });
  } catch (error) {
    next(error);
  }
};