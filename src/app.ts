import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/main';
import NotFound from './middlewares/NotFound';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));
app.use(cookieParser());

//test route
const test = async (req: Request, res: Response) => {
  const sayHi = 'Hi~! Jakuan';
  res.send(sayHi);
};

app.get('/', test);

//application routes
app.use('/api', router);

//gloabal err handler
app.use(globalErrorHandler);

//Not Found Route
app.use(NotFound);

export default app;
