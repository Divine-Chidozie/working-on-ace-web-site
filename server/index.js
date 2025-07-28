import express from 'express';
import path from 'node:path';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static(path.join(import.meta.dirname, '../client/build')));
console.log(path.join(import.meta.dirname, '../client/build'))
app.use(express.json());

app.get('/', (req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.sendFile(path.join(import.meta.dirname, '../client/build/index.html'));
    //res.end('<h1>Ace Home</h1>');
});

app.get('/api', (req, res) => {
    res.statusCode = 200;
    res.json({"message": `${req.method} request from origin ${req.url}`})
})
app.get('/services', (req, res) => {
    res.setHeader("content-type", "text/html");
    res.send('<h1>Our Services</h1>')
});

app.use((req, res) => {
    res.status = 404;
    res.send(`<h1>Error</h1> <code style="background: #ccc">${req.host}${req.url}</code> page doesn\'t exist`);
});

app.listen(PORT, error => {
    if (error) {
        console.log(error.message);
        return
    }
    console.log('Server is running on port 5000.');
});
