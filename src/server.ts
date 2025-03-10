import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Route principale
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
});
