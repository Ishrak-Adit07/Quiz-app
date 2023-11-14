import React, {Fragment} from 'react';

export default function QuizPageHeader() {
  return (
    <div className='centerAlign mt-20'>
      <Fragment>
        <h1 className='quizTitle'>Harry Potter Quiz</h1>
        <img class="imageDesign" src="./images/Logo.png" alt="Logo" />
      </Fragment>
    </div>
  );
}
