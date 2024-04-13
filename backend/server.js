import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {connectDB}  from "./config/db.js"
import { router as orderRoute } from "./routes/orderRoute.js";
import { router as menuRoute} from "./routes/menuRoute.js"
//import { errorHandler } from "./middleware/errorMiddleware";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors())

/* paths:  */
app.use('/orders', orderRoute)
app.use('/menu', menuRoute)
/* error handlers:
app.use(errorHandler)

*/
app.listen(port, () => {
    console.log("server running on port ", port)
})
