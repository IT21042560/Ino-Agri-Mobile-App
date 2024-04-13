import express from "express";
import { UserSignUp } from '../Controller/User.js'

const router = express.Router();

router.post('/signup', UserSignUp);


export default router