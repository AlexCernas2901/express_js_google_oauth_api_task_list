import express from 'express';
import { taskControllers } from '../controllers/taskControllers.js';
const router = express.Router();

const isLoggedIn = (req, res, next) =>
  req.user ? next() : res.sendStatus(401);

router.get('/get-tasks', isLoggedIn, taskControllers.getTasks);
router.get('/get-task/:description', isLoggedIn, taskControllers.getTask);
router.post('/add-task', isLoggedIn, taskControllers.postTask);
router.patch('/update-task/:id', isLoggedIn, taskControllers.patchTask);
router.delete('/delete-task/:id', isLoggedIn, taskControllers.deleteTask);

export default router;
