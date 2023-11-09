import express from "express";
import cors from "cors";
import compression from "compression";
import {requestLogger} from "../utils/api.js";
const app = express();

app.use(compression());
app.use(express.json());
app.use(cors());
app.use(requestLogger);

export default app;