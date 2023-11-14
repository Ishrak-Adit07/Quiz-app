const express = require('express');
const { runQuery } = require('../DB Executions/runQuery');
const router = express.Router();

//Getting all existing questions
router.get("/", async(req, res)=>{
    try {
        
        const getAllQuestionsQuery = `SELECT * FROM quizquestions`;
        const getAllQuestionsQueryResult = await runQuery(getAllQuestionsQuery);

        res.json(getAllQuestionsQueryResult.rows);

    } catch (err) {
        console.error(err.message);
    }
});

//Getting desired number of questions
router.get("/:numberOfQuestions", async(req, res)=>{
    try {
        
        const {numberOfQuestions} = req.params;
        const getAllQuestionsQuery = `SELECT * FROM quizquestions`;
        const getAllQuestionsQueryResult = await runQuery(getAllQuestionsQuery);
        //Sorting questions randomly and Slicing
        let randomArray = getAllQuestionsQueryResult.rows.sort(() => Math.random() - 0.5);
        randomArray = randomArray.slice(0, numberOfQuestions);

        let responseArray = [];
        for(let i=0; i<numberOfQuestions; i++){
            responseArray.push({
                "qid" : randomArray[i].qid,
                "question" : randomArray[i].question,
                "options" : [
                    {
                        "value" : randomArray[i].option1,
                        "bool" : false
                    },
                    {
                        "value" : randomArray[i].option2,
                        "bool" : false
                    },
                    {
                        "value" : randomArray[i].option3,
                        "bool" : false
                    },
                    {
                        "value" : randomArray[i].option4,
                        "bool" : true
                    }
                ]
            });
            responseArray[i].options.sort(() => Math.random() - 0.5);
        }

        res.json(responseArray);

    } catch (err) {
        console.error(err.message);
    }
});

//Posting new question
router.post("/", async(req, res)=>{
    try {
        
        const {question, option1, option2, option3, option4} = req.body;
        const insertQuestionQuery = `INSERT INTO quizquestions (question, option1, option2, option3, option4) VALUES ('${question}', '${option1}', '${option2}', '${option3}', '${option4}') RETURNING *`;
        const insertQuestionQueryResult = await runQuery(insertQuestionQuery);

        res.json(insertQuestionQueryResult.rows);

    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
