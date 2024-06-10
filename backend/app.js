import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// TODO T32: sign up
app.post('/sign-up', (req, res) => {

});

// TODO T32: log in 
app.post('/log-in', (req, res) => {

});

// TODO T32: profile 
app.post('/profile', (req, res) => {

});

export default app;