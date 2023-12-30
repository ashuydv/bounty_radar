/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './page.module.css'
import Bounties from '@/components/bounties'
import Platforms from '@/components/platforms'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div className='min-h-screen relative'>
        <div className="bg-gradient-to-tr from-purple-600 to-pink-600 w-[400px] h-[400px] fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-10 rounded-full transition-all">
        </div>
        <div className="px-4 py-20 flex items-center relative z-10 justify-center flex-col w-full h-full">
        </div>
        <div className="bg-gradient-to-tr from-purple-600 to-purple-900 fixed bottom-0 right-0 z-0 w-[500px] h-[500px] opacity-10 blur-3xl"></div>
        {/* <AnimateText /> */}
        <h2 className='text-2xl'>Bounties</h2>
        <Bounties />
        <h2 className='text-2xl'>Bounty Platforms</h2>
        <Platforms />
      </div>
    </div>
  )
}

export default Home