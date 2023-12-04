import { connect } from 'mongoose';

async function main () {
  await connect('mongodb://127.0.0.1:27017/tasks');
}

main()
  .then(() => {
    console.log('Database connection established from app.js');
  })
  .catch((err) => {
    console.error('Error connecting to the database: ', err);
  });
