import express from 'express';
// import { createUser, getUserByEmail } from '../users/userdal';
// import { login } from '../users/controllers';
import { registerController, loginController } from '../auth';

const router = express.Router();

// User registration route
router.post('/register', registerController);

// User login route
router.post('/login', loginController);

export default router;
