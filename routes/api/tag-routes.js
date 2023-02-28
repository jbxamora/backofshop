const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint 


// Find all tags and associated Product Data
router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tags found' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Find single tag by id and Associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new tag
router.post('/', (req, res) => {

});

// Update a tag's name by its `id` value
router.put('/:id', (req, res) => {

});

// Delete on tag by its `id` value
router.delete('/:id', (req, res) => {

});

module.exports = router;
