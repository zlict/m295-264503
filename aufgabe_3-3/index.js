import express from "express";

const app = express();
const port = 3000;

app.get('/now', (request, response) => {
  response.send(new Date().toLocaleString("de-CH"));
});

app.get('/html', (request, response) => {
    const htmlContent = `
        <html>
            <head>
                <title>HTML Seite</title>
            </head>
            <body>
                <h1>Willkommen auf meiner HTML Seite!</h1>
            </body>
        </html>
    `;
    response.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});