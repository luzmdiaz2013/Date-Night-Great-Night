//. The Controller holds the specific functions that will be sent out to their corresponding views

const DateNight = require('../models/model.js'); //importing model.js

const dateNightsController = {};

dateNightsController.index = (req, res) => { //show all dates in database datestable
  DateNight.findAll()
    .then(dateNights => {
      res.render('dateNights-index(all).ejs',
        {dateNights})
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};


dateNightsController.show = (req, res) => { //show one date by id
  DateNight.findById(req.params.id)
    .then(dateNight => {
      res.status(200).render('dateNights-show(one).ejs',
        {dateNight: dateNight})
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};


dateNightsController.create = (req, res) => {
  DateNight.create({
    date: req.body.date,
    time: req.body.title,
    location: req.body.location,
    description: req.body.description,
    url: req.body.url,
  }).then(dateNight => {
    res.redirect(`/dateNights`);
  }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

dateNightsController.edit = (req, res) => {
  DateNight.findById(req.params.id)
    .then(dateNight => {
      res.status(200).render('dateNights-edit(update).ejs', {
        dateNight: dateNight})
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};


dateNightsController.update = (req, res) => {
  DateNight.update({
    date: req.body.date,
    time: req.body.title,
    location: req.body.location,
    description: req.body.description,
    url: req.body.description
  }, req.params.id)
  .then(dateNight => {
    res.redirect(`/dateNights/${dateNight.id}`);
  }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};


dateNightsController.delete = (req, res) => {
  DateNight.destroy(req.params.id)
    .then(() => {
      res.redirect('/dateNights');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

};



module.exports = dateNightsController;

// module.exports = todosController;
