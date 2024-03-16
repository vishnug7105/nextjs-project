import React from 'react'
import Header from './Header'
import { BsThreeDots } from 'react-icons/bs'
import Post from '@/src/post'

const HomePage = () => {
  return (
    <div className='w-full h-full bg-blue-100'>
        <Header/>
        

        <div className='grid w-full grid-cols-3 gap-6 max-w-screen-lg mt-20  mx-auto '>
        <div className='w-full  col-span-2 '>
            
            <section className='gap-y-4 flex flex-col'>
            {
                new Array(5).fill(1).map((_,i)=>(
                    <Post key={i} index={i}/>
                ))
               }
                 </section>
        </div>
        <div className='fixed right-[15%] max-w-sm col-span-1 '> </div>
        </div>
        </div>
  ) 
}

export default HomePage
