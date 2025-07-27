import express, { request } from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
//app.use(express.json());

app.get('/', (request, response) => {
    response.writeHead(200, {"content-type": "text/html"});
    response.end('<h1>Ace</h1>');
});

app.get('/api', (request, response) => {
    response.statusCode = 200;
    response.json({"message": `${request.method} request from origin ${request.url}`})
})

app.listen(PORT, error => {
    if (error) {
        console.log(error.message);
        return
    }
    console.log('Server is running on port 5000.');
})
