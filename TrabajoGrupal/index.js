import express from 'express';
import cors from 'cors';

import config from './config.js';
import UserRouter from "./routers/userRouter.js"
import comunityRouter from "./routers/comunityRouter.js"
import eventRouter from "./routers/eventsRouter.js"
import shareRouter from './routers/shareRouter.js'
import notificationRouter from './routers/shareRouter.js'
import UserHasReportRouter from './routers/userHasReportRouter.js'
import reportRouter from './routers/reportsRouter.js'
import categoriesRouter from './routers/categoriesRouter.js'
import GamificationsHasUserRouter from './routers/GamificationsHasUserRouter.js'
import GamificationRouter from './routers/gamificationRouter.js'
import rollRouter from './routers/rollsRouter.js'
import rollUserComunytiRouter from './routers/rollUserComunytiRouter.js'
const app = express();

app.use(cors());
app.use(express.json());
//Rout

app.use('/user', UserRouter);
app.use('/comumunities', comunityRouter);
app.use('/event', eventRouter);
app.use('/share', shareRouter);
app.use('/notification', notificationRouter);
app.use('/reportUser', UserHasReportRouter);
app.use('/report', reportRouter);
app.use('/categories', categoriesRouter);
app.use('/gaminHasUser', GamificationsHasUserRouter);
app.use('/gamin', GamificationRouter);
app.use('/roll', rollRouter);
app.use('/rollusercomunity', rollUserComunytiRouter);




app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
       