import mongoose from 'mongoose';

const DB_NAME = 'authPlayground';

mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);

const db = mongoose.connection;
db.on('error', (error) => console.log('DB Error', error));
db.once('open', () => console.log('✅ Connected To DB'));