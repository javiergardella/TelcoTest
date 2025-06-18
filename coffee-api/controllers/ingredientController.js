let ingredients = [];
let idCounter = 1;

exports.createIngredient = (req, res) => {
    const { name, quantity, unit } = req.body;
    const newIngredient = {
        id: idCounter++,
        name,
        quantity,
        unit
    };
    ingredients.push(newIngredient);
    res.status(201).json(newIngredient);
};

exports.getAllIngredients = (req, res) => {
    res.json(ingredients);
};

exports.getIngredientById = (req, res) => {
    const ingredient = ingredients.find(i => i.id === parseInt(req.params.id));
    if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });
    res.json(ingredient);
};

exports.updateIngredient = (req, res) => {
    const ingredient = ingredients.find(i => i.id === parseInt(req.params.id));
    if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });

    const { name, quantity, unit } = req.body;
    ingredient.name = name;
    ingredient.quantity = quantity;
    ingredient.unit = unit;

    res.json(ingredient);
};

exports.deleteIngredient = (req, res) => {
    const index = ingredients.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Ingredient not found' });
    ingredients.splice(index, 1);
    res.status(204).send();
};