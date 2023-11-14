import express from 'express';
// import { createUser, getUserByEmail } from '../users/userdal';
// import { login } from '../users/controllers';
// import { registerController, loginController } from '../auth';
import { register,login } from '../user/userController';
const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

export default router;
