import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {    
const token=req.headers.authorization?.split(' ')[1];
if(!token){
    res.status(401).json({message:'No token provided'});
}
try{
    const decoded = jwt.verify(token as string, config.access_token_secret as string);
    req.user = decoded as JwtPayload;
    next();
}catch(err){
    res.status(401).json({message:'Invalid token'});
}

}

