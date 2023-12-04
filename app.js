import express from 'express';
import './src/config/database/connection.js';
import './src/config/googleAuth.js';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import morgan from 'morgan';
import auth from './src/routes/auth.js';
import tasks from './src/routes/tasks.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000', // url de la app
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // metodos permitidos para la app
    credentials: true // permite el intercambio de cookies entre la app y el servidor
  })
);

app.use(session({ secret: 'dv39qip7DFPp7Wwttl' })); // inicializar sesión con una clave secreta
app.use(passport.initialize()); // inicializar passport para autenticar con google
app.use(passport.session()); // inicializar passport para autenticar con google y mantener la sesión
app.get('/', (req, res) => res.redirect('/auth/google')); // ruta para redireccionar a la app
app.use('/auth', auth); // ruta para autenticar con google
app.use('/tasks', tasks); // ruta para las tareas

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
