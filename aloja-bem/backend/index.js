const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Backend funcionando!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
