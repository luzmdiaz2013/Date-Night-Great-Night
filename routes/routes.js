// Routes tells the server where to go next by determining the path to the view

const express = require('express');
const dateNightsRouter = express.Router();

const dateNightsController = require('../controllers/controller.js');

dateNightsRouter.get('/', dateNightsController.index); //Show all dateNights

dateNightsRouter.get('/new', (req, res) => {
  res.render('dateNights-create(new).ejs');
})
dateNightsRouter.post('/', dateNightsController.create); //Create/Add a new dateNight


dateNightsRouter.get('/:id', dateNightsController.show); //Show one dateNight by id


dateNightsRouter.get('/:id/edit', dateNightsController.edit); //Edit existing dateNight

dateNightsRouter.put('/:id', dateNightsController.update);

dateNightsRouter.delete('/:id', dateNightsController.delete);

module.exports = dateNightsRouter;

