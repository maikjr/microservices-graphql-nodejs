import express from 'express';
import cors from 'cors';
import accessEnv from '@root/helpers/accessEnv';

const PORT = accessEnv('PORT', 7100);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    }),
);

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Listings services listening on ${PORT}`);
});
