// Routes tells the server where to go next by determining the path to the view

const express = require('express');
const dateNightsRouter = express.Router();

const dateNightsController = require('../controllers/controller.js');

dateNightsRouter.get('/', dateNightsController.index); //Show all dateNights

dateNightsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('dateNights-create(new).ejs');
})
dateNightsRouter.post('/', authHelpers.loginRequired, authHelpers.loginRequired, dateNightsController.create); //Create/Add a new dateNight


dateNightsRouter.get('/:id', dateNightsController.show); //Show one dateNight by id


dateNightsRouter.get('/:id/edit', authHelpers.loginRequired, dateNightsController.edit); //Edit existing dateNight

dateNightsRouter.put('/:id', authHelpers.loginRequired, dateNightsController.update);

dateNightsRouter.delete('/:id',
 authHelpers.loginRequired, dateNightsController.delete);

module.exports = dateNightsRouter;

