const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    let visitCount = req.cookies.visitCount || 0;
    visitCount = parseInt(visitCount) + 1;

    res.cookie('visitCount', visitCount, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // Cookie valide pendant 1 an

    res.send(`
        <h1>Bienvenue sur la Page</h1>
        <p>Cette page a été visitée ${visitCount} fois.</p>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
