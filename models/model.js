// The Model grabs the info from the database
// and uses the data collected in "db" from config

const db = require('../db/config.js');

const DateNight = {};

DateNight.findAll = () => {
  return db.manyOrNone('SELECT* FROM datestable ORDER BY id ASC');
  // return db.query('SELECT * FROM todolist');
};

DateNight.findById = id => {// Selecting everything from the table
  return db.one(`
    SELECT * FROM datestable
    WHERE id = $1`,
    [id] );
};


DateNight.create = dateNight => { //Creating new query into database (datestable)
  return db.one(`
    INSERT INTO datestable
    (date, time, location, description, url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING * `,
    [dateNight.date, dateNight.time, dateNight.location, dateNight.description, dateNight.url])
};


DateNight.update = (dateNight, id) => {
  return db.one(`
    UPDATE datestable SET
    date = $1,
    time = $2,
    location = $3,
    description = $4,
    url = $5
    WHERE id = $6
    RETURNING * `,
    [dateNight.date, dateNight.time, dateNight.location, dateNight.description, dateNight.url, id]);

};


DateNight.destroy = id => {
  return db.none(`
    DELETE FROM datestable
    WHERE id = $1`,
    [id]);
};



module.exports = DateNight;


