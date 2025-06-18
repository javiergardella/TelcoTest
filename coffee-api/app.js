const express = require('express');
const app = express();
const ingredientRoutes = require('./routes/ingredientRoutes');

app.use(express.static('pages'));
app.use(express.json());
app.use('/ingredients', ingredientRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Coffee Ingredients API running on port ${PORT}`);
});