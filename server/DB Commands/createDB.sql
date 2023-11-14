CREATE DATABASE quizdb;

CREATE TABLE quizQuestions(
    qid SERIAL PRIMARY KEY,
    question VARCHAR(255),
    option1 VARCHAR(255),
    option2 VARCHAR(255),
    option3 VARCHAR(255),
    option4 VARCHAR(255)
);