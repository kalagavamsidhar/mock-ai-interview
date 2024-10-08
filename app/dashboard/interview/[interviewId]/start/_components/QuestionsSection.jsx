import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {
    console.log(mockInterviewQuestion);
  return (
    <div className='p-5 border rounded-lg'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
                <h2 className='p-2 bg-secondary rounded-full'>Question #{index+1}</h2>
            ))}
        </div>
        <h2>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
    </div>
  )
}

export default QuestionsSection