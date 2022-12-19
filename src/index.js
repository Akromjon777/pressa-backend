import express from "express";
import cors from 'cors'
import path from "path";
import module from './modules/index.js'
import authorization from "./middlewares/authorization.js";
import errorHandling from "./middlewares/errorHandling.js"
import { config } from "dotenv";
config();
const port = process.env.PORT
const app = express();

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'src', 'uploads')));
app.use(cors());
app.use(authorization);
app.use('/', module)
app.use(errorHandling);

app.listen(port || 1717, () => console.log(`*${port|| 1717}`));