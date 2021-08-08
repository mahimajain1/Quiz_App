import React, { useState } from 'react';

const Quiz = (props) => {

    const [ques, setQues] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) { setScore(score + 1) };
        const nextQues = ques + 1;
        if (nextQues < props.questions.length) {

            setQues(nextQues);

        }
        else {
            setShowScore(true);
        }
    }



    return (
        <>
            <div className='app'>{showScore ?
                <>
                    <div className='score-section'>
                        You scored {score} out of {props.questions.length}
                    </div>
                    <div className='restart'>
                        <button onClick={() => { window.location.reload() }}>Restart</button>
                    </div>

                </>
                :
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {ques + 1}</span>/{props.questions.length}
                        </div>
                        <div className='question-text'>{props.questions[ques].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {props.questions[ques].answerOptions.map((answerOption, index) => (

                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} >{answerOption.answerText}</button>

                        ))}
                    </div>

                </>

            }

            </div>


        </>
    );
}
export default Quiz;