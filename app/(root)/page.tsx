import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <section className="card-cta">
      <div className='flex flex-col max-w-lg gap-6'>
        <h2 className=''>Practice job interview with AI</h2>
        <p className='text-lg'>Get ready for your next job interview with our AI-powered assistant. Practice your answers and get instant feedback to improve your performance.</p>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">
            Start an Interview
          </Link>
        </Button>
      </div>

      <Image 
        src='/robot.png'
        alt="robot"
        width={400}
        height={400}
        className='max-sm:hidden'
      />
    </section>

    <section className="flex flex-col gap-6 mt-8">
      <h2>
        Your interviews
      </h2>
      <div className="interviews-section">
        {/* <p className='text-lg'>You haven't taken any interviews yet.</p> */}
        {dummyInterviews.map((interview) => (
         <InterviewCard {...interview} key={interview.id} />
        ))}
      </div>
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>
        Take an interview
      </h2>
      <div className="interviews-section">
      {dummyInterviews.map((interview) => (
         <InterviewCard {...interview} key={interview.id} />
        ))}
        {/* <p className='text-lg'>You haven't taken any interviews yet.</p>  */}
      </div>
    </section>
    </>
  )
}

export default page