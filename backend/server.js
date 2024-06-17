const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const cats = [
  { id: 1, name: 'Fluffy', breed: 'Persian', age: 3, description: 'A fluffy Persian cat.' },
  { id: 2, name: 'Whiskers', breed: 'Siamese', age: 2, description: 'An energetic Siamese cat.' },
  
];

app.get('/cats', (req, res) => {
  res.json(cats);
});

app.get('/cat/:id', (req, res) => {
  const catId = parseInt(req.params.id);
  const cat = cats.find(cat => cat.id === catId);
  if (!cat) {
    res.status(404).json({ error: 'Cat not found' });
  } else {
    res.json(cat);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
