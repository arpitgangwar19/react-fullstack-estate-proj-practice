import express from 'express';
import postsRouter from './routes/posts.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/posts",postsRouter);
app.use("/api/auth",authRouter);
console.log("tecost");
app.listen(9000,()=>{
    console.log("Server Started");
})