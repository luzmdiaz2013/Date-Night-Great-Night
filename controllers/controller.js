// const Todo = require('../models/Todo');

// const todosController = {};

// todosController.index = (req, res) => {
//   Todo.findAll()
//     .then(todos => {
//       res.render('todos/todos-index', {
//         todos: todos,
//         auth: (req.user) ? true : false,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// };

const DateNight = require('/models/DateNight');

const dateNightsController = {};

dateNightsController.index = (req, res) => {
  DateNight.findAll()
    .then(dateNights => {
      es.render('dateNights/dateNights-index',{
        dateNights: dateNights,
        auth: (req.user) ? true : false,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};



// todosController.show = (req, res) => {
//   Todo.findById(req.params.id)
//     .then(todo => {
//       res.render('todos/todos-show', {
//         todo: todo,
//         auth: (req.user) ? true : false,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// };


dateNightsController.show = (req, res) => {
  DateNight.findById(req,.params.id)
    .then(dateNight => {
      res.render('dateNights/dateNights-show', {
        dateNight: dateNight,
        auth: (req.user) ? true : false,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err;)
    });
};

// todosController.create = (req, res) => {
//   Todo.create({
//     title: req.body.title,
//     description: req.body.description,
//     category: req.body.category,
//     status: req.body.status,
//   }, req.user.id).then(todo => {
//     res.redirect(`/todos/${todo.id}`);
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };

dateNightsController.create = (req, res) => {
  DateNight.create({
    date: req.body.date,
    time: req.body.title,
    location: req.body.location,
    description: req.body.description,
    url: req.body.description
  })
})

// todosController.edit = (req, res) => {
//   Todo.findById(req.params.id)
//     .then(todo => {
//       res.render('todos/todos-edit', {
//         todo: todo,
//         auth: (req.user) ? true : false,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// };

dateNightsController.edit = (req, res) => {
  DateNight.findById(req.params.id)
    .then(dateNight =>{
      res.render('dateNights/dateNights-edit', {
        dateNight: dateNight,
        auth: (req.user) ? true : false,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

// todosController.update = (req, res) => {
//   Todo.update({
//     title: req.body.title,
//     description: req.body.description,
//     category: req.body.category,
//     completion: req.body.completion,
//   }, req.params.id).then(todo => {
//     res.redirect(`/todos/${todo.id}`);
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };


dateNightsController.update = (req.res) => {
  DateNight.update({
    date: req.body.date,
    time: req.body.title,
    location: req.body.location,
    description: req.body.description,
    url: req.body.description
  }, req.params.id).then(dateNight => {
    res.redirect(`/dateNights/${dateNight.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};


// todosController.delete = (req, res) => {
//   Todo.destroy(req.params.id)
//     .then(() => {
//       res.redirect('/todos');
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// };

dateNightsController.delete = (req, res) => {
  DateNight.destroy(req.params.id)
    .then(() => {
      res.redirect('/dateNights');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// todosController.complete = (req, res) => {
//   Todo.complete(req.params.id)
//     .then(todo => {
//       res.json({
//         completed: true,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({
//         err: err,
//         completed: false,
//       });
//     });
// };

module.exports = dateNightsController;

// module.exports = todosController;
