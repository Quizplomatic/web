// import React, { useState } from 'react'
// import { useTransition } from 'react-spring'

// const QuizQuestion = ( { previousQuestion, seeSolution, question } ) => {
//     const [isVisible, setIsVisible] = useState(false)
//     const transition = useTransition(isVisible, {

//     })

//     return (
//         <div>
//             <div className="question-card">
//             {/* {previousQuestion &&
                
//                     <div key={Math.random()} className={`question-card-inner previous-question ${seeSolution ? "flip" : ""}`}>
//                         <div className="question-card-front">
//                             <h3>{previousQuestion.title}</h3>
//                         </div>

//                         <div className="question-card-back">
//                             <h3>{previousQuestion.solution}</h3>
//                         </div>
//                     </div>

//             } */}

//                 {transition((style, item) => {
//                     item ?  
//                     <>
//                     <div key={Math.random()}className={`question-card-inner new-question ${seeSolution ? "flip" : ""}`}>
//                         <div className="question-card-front">
//                             <h3>{question.title}</h3>
//                         </div>

//                         <div className="question-card-back">
//                             <h3>{question.solution}</h3>
//                         </div>
//                     </div>
//                     </>
//                     : ''
               
//                 })}
//             </div>
//         </div>
//     )
// }

// export default QuizQuestion

