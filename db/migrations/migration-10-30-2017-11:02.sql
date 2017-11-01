CREATE TABLE IF NOT EXISTS usersTable (
id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE NOT NULL,
password_digest TEXT NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL
);



CREATE TABLE IF NOT EXISTS datesTable (
id SERIAL PRIMARY KEY,
date TEXT,
time TEXT,
location TEXT,
description TEXT,
url TEXT
);


