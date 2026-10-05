import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

// Nouvelles routes ici
app.get('/notjorge', (_req, res) => {
  res.send('Route de conflict');
});



app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;