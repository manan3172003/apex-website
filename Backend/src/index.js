import express from "express";
import router from './router.js';
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 1338;
const app = express();

// Handling CORS
app.use(cors());
app.use(express.json());
// applying handler for API
app.use("/", router);
// Handling serving static files
app.use(express.static(path.join(__dirname, '../client/build')));
// Serving app on PORT we defined
app.listen(PORT, () => {
console.log(`Express is running on port ${PORT}`);
});