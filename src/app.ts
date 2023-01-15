import express from 'express';
import { router } from './routes';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://gegteam:gegteam@authenticationapp.um4cczy.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(router);

export { app } 