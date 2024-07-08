import { Router } from 'express';
import multer from 'multer';
import { login, logout, register, verifyToken ,updateProfile} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateMiddlewares.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';


const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/register', validateSchema(registerSchema), register);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/verify', verifyToken);

router.get('/profile', authRequired, upload.single('profileImage'),updateProfile);



export default router;
