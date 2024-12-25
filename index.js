const express = require('express');
const cors = require('cors');
const proverbs = require('./proverbs.json');
const app = express();
const PORT = process.env.PORT || 3000;
const https = require('https');
const cron = require('node-cron');

app.use(cors());

cron.schedule('*/14 * * * *', () => {
    https.get('https://ata-sozleri-api.onrender.com/api/proverbs');
});



app.get('/api/proverbs', (req, res) => {
    res.json(proverbs);
});


app.get('/api/proverbs/random', (req, res) => {
    const allProverbs = [];

    Object.values(proverbs).forEach(letterGroup => {
        allProverbs.push(...letterGroup);
    });

    if (allProverbs.length === 0) {
        return res.status(404).json({ message: "Atasözü tapılmadı." });
    }

    const randomProverbs = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * allProverbs.length);
        randomProverbs.push(allProverbs[randomIndex]);
    }

    res.json(randomProverbs);
});

app.get('/api/proverbs/:letter', (req, res) => {
    const letter = req.params.letter.toUpperCase();
    console.log(letter);

    if (!proverbs[letter]) {
        return res.status(404).json({ message: "Bu hərf üçün atalar sözü tapılmadı." });
    }
    res.json(proverbs[letter]);
});




app.get('/api/proverbs/:letter/:id', (req, res) => {
    const letter = req.params.letter.toUpperCase();
    const id = parseInt(req.params.id)

    if (!proverbs[letter]) {
        return res.status(404).json({ message: "Bu hərf üçün atalar sözü tapılmadı." });
    }

    const proverb = proverbs[letter].find(p => p.id === id);

    if (!proverb) {
        return res.status(404).json({ message: "Bu ID üçün atalar sözü tapılmadı." });
    }

    res.json(proverb);
});


app.listen(PORT, () => {
    console.log(`API, http://localhost:${PORT} running on port.`);
});
