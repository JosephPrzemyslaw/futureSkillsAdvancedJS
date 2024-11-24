import express from 'express';
import cors from 'cors';
import dict from './resources/dict.js';

const PORT = 3003;
const app = express();

app.use(cors());

//
// Example: localhost:3003/words?filter=tra
//
app.get('/words', (req, res) => {
    const filteringPhrase = req.query.filter;
    const filteredDict = dict.filter(word => word.startsWith(filteringPhrase));

    res.send(filteredDict);
});

app.listen(PORT);
