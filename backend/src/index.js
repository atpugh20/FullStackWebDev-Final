import dotenv from 'dotenv';
import { initDatabase } from './db/init.js';
import { app } from './app.js';

dotenv.config();

try {
  await initDatabase();
  const PORT = process.env.PORT;
  app.listen(PORT);
  console.info(`Express server running on http://localhost:${PORT}`);
} catch (err) {
  console.error('error connecting to database: ', err);
}
