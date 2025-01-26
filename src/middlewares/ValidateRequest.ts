import { NextFunction, Response, Request } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/CatchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync(
     req.body
    );
    next();
  });
};

export default validateRequest;
