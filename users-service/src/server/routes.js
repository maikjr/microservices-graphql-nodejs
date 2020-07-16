import {User} from '@root/db/models';
import generateUUID from '@root/helpers/generateUUID';
import hashPassword from '@root/helpers/hashPassword';

const setupRoutes = (app) => {
  app.post('/users', async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
      return next(new Error('Invalid body!'));
    }

    try {
      const newUser = await User.create({
        id: generateUUID(),
        email,
        passwordHash: hashPassword(password),
      });
      return res.json(newUser);
    } catch (e) {
      return next(e);
    }

    return res.json(listings);
  });
};
export default setupRoutes;
