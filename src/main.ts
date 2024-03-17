import express from 'express'
import accountRouter from './routes/account';

const app = express();

app.use('/', accountRouter)

app.listen(3000, () => console.log("Test"))