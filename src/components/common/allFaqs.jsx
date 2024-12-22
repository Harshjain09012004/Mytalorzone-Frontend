import React from 'react'
import { Faq } from './faq'

export const AllFaqs = () => {
  return (
    <div className='flex flex-col place-items-center gap-10 mt-8 mb-24'>
        <p className='text-4xl font-medium'>FAQ's</p>
        <Faq Ques={'How to register a complaint ?'} Ans={'You can register your complaint by clicking on the menuBar on the header or By clicking on the button register complaint.'}/>

        <Faq Ques={'How to track complaint status ?'} Ans={'You can check complaint status By clicking on the menuBar on the header or by clicking the check status button'}/>

        <Faq Ques={'How much it takes for a complaint to get resolved ?'} Ans={'It depends on the type of complaint, normal complaint have average resolution time of 1-2 weeks while complex complaints can take 1-2 months or more, Although we try our best to resolve complaints as early as possible'}/>

        <Faq Ques={'Do i have to visit office after filing complaint ?'} Ans={'No, You don\'t need to visit regularly but you would be called whenever our team requires your physical presense otherwise you have enough details on the portal then you don\'t have to face much difficulty. '}/>

    </div>
  )
}
