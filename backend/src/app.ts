import 'reflect-metadata';
import 'express-async-errors';
import 'module-alias/register'
import './configs/createConnectionDatabase';
import './container';
import express from 'express';
import cors from 'cors';
import httpError from './middlewares/httpError';
import facade from './facades';
import { redactXPoweredBy } from './middlewares/redacts';

const app = express();

app.use(cors());
app.use(express.json());
app.use(redactXPoweredBy);
app.use(facade);
app.use(httpError);

export default app;