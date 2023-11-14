import React, {Fragment, useEffect, useState} from 'react';

export default function QuestionCard() {  

  const [Nquestions, setNQuestions] = useState([{}]);

  const [countOfQuestion, setCountOfQuestion] = useState(0);
  //const [score, setScore] = useState(0);
  
  //Set current Values of Question and Options
  const setCurrentValues = (cnt) =>{
    setCountOfQuestion(cnt);  
  }

  //Get 5 new questions at first
  const getNquestions = async() =>{
    try {
      
      setCountOfQuestion(0);
      const numberOfQuestions = 5;
      const response = await fetch(`http://localhost:4000/questions/${numberOfQuestions}`);
      const jsonResponse = await response.json();
      setNQuestions(jsonResponse);
      console.log(Nquestions);
      setCurrentValues(0);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(()=>{
    getNquestions();
  }, [] );

  const checkSubmission = (option) =>{
    console.log(Nquestions[countOfQuestion].options[option].bool);
  }

  return (
    <div className='centerAlign mt-20'>
      <Fragment>
        <div class="container centerAlign cardDesign">
            <h2>Question {countOfQuestion+1}</h2>

            <div class="card img-fluid centerAlign" style={{width:600}}>
                    <img class="card-img-top" src="./images/GreatHall.png" alt="Card" />
                    <div class="card-img-overlay" text='white'>
                      
                        <p class='card-question'>
                            {Nquestions[countOfQuestion].question}
                        </p>
                        <p class="card-options">
                            <button className='optionbtn' onClick={()=>{checkSubmission(0)}}>{Nquestions[countOfQuestion].options[0].value}</button><br/>
                            <button className='optionbtn' onClick={()=>{checkSubmission(1)}}>{Nquestions[countOfQuestion].options[1].value}</button><br/>
                            <button className='optionbtn' onClick={()=>{checkSubmission(2)}}>{Nquestions[countOfQuestion].options[2].value}</button><br/>
                            <button className='optionbtn' onClick={()=>{checkSubmission(3)}}>{Nquestions[countOfQuestion].options[3].value}</button><br/>
                        </p>

                        <button className='card-button' onClick={()=>{setCurrentValues(countOfQuestion+1)}} 
                        disabled={countOfQuestion===4?true:false}>Next</button>
                        <br />
                        <button className='card-button' onClick={()=>{
                          getNquestions();
                        }}>New</button>
      
                    </div>
            </div>

        </div>
      </Fragment>
    </div>
  );
}
