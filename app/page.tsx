import AnimateText from '@/components/animate-text'
import React from 'react'
import './page.module.css'
import Bounties from '@/components/bounties'
import Resources from './resources/page'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div className='min-h-screen relative'>
        <div className="bg-gradient-to-tr from-purple-600 to-pink-600 w-[200px] h-[200px] absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-20 rounded-full transition-all animate-pulse">
        </div>
        <div className="px-4 py-60 flex items-center relative z-10 justify-center flex-col w-full h-full">
          <h2 className='text-white text-[50px] font-semibold'>let's fuckin build it ! 💰🧑‍💻 </h2>
        </div>
        <div className="bg-gradient-to-tr from-purple-600 to-purple-900 absolute bottom-0 right-0 z-0 w-[300px] h-[300px] blur-3xl"></div>
        <AnimateText />
      </div>
      <Bounties />
      <Resources />
    </div>
  )
}

export default Home