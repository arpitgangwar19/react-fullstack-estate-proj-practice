import express from 'express';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import testRouter from './routes/test.route.js';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js'
import chatRoute from './routes/chat.route.js'
import messageRoute from './routes/message.route.js'

const app = express();

console.log(process.env.CLIENT_URL);
app.use(cors({origin:process.env.CLIENT_URL?.replace(/\/$/, ''),credentials:true }))
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.use("/test",testRouter);
console.log("tecost");
app.listen(9000,()=>{
    console.log("Server Started");
})