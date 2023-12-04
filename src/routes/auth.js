import express from 'express';
import authControllers from '../controllers/authControllers.js';

const router = express.Router();

router.get('/google', authControllers.authenticateGoogle);
router.get('/login/success', authControllers.handleLoginSuccess);
router.get('/google/callback', authControllers.handleGoogleCallback);
router.get('/logout', authControllers.handleLogout);
router.get('/failure', authControllers.handleFailureRedirect);

export default router;
