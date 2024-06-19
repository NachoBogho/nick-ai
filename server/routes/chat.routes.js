import express from 'express';
import { handleChat } from '../manager/chatManager.js';

const router = express.Router();

router.post('/', handleChat);

export default router;
