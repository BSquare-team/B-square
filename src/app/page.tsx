import React from 'react'
import { Button } from '../shared/components/ui/button';
export default function HomePage() {
  return (
    <div className="home-gradient">
      <section className='relative mx-auto lg:w-[1020px] px-6 flex items-center h-screen justify-center md:justify-start '>
        <div className='flex flex-col w-full lg:w-[41%] sm::w-[64%] text-center md:text-start items-center md:items-start prose dark:prose-invert'>
          <h1>Powerful tools for web professionals</h1> 
          <p>We help designers and developers finish their projects on time and ship faster.</p>
          <Button className='w-44.25 rounded-full bg-[#2d53fe] hover:bg-[#0533ff] border-0 shadow-2xl shadow-[#2d53fe]'>View our services</Button>
        </div>
      </section>
    </div>
  )
}
