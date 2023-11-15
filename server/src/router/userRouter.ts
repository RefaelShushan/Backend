import express from 'express';
// import { createUser, getUserByEmail } from '../users/userdal';
// import { login } from '../users/controllers';
// import { registerController, loginController } from '../auth';
import { register,login,updateCart } from '../user/userController';
const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

router.put('/:id',updateCart)

export default router;
