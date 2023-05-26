import dotenv from 'dotenv';
dotenv.config();
// Exporting env variable

const client = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};

export {client};
