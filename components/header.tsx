import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="avgardd fixed bg-transparent z-50 w-full body-font">
            <div className="container p-4 md:p-[20px] mx-auto">
                <div className="flex flex-wrap rounded-3xl overflow-hidden p-5 flex-row md:flex-row items-center bg-[#0f0f0fcc] backdrop-blur-[100px] justify-between">
                    <a href='/' className="flex title-font font-medium items-center text-white mb-0">
                        <span className='w-8 h-8 bg-purple-900 px-2 rounded-full'></span>
                        <span className="-ml-4 text-xl"> bountyradar</span>
                    </a>
                    <div className=" space-x-4">
                        <ul className='flex items-center space-x-4'>
                            {/* <li className='link'>
                                <Link href="/bounties">bounties</Link>
                            </li>
                            <li className='link'>
                                <Link href="/resources">resources</Link>
                            </li> */}
                            <li className='link'>
                                <Link href="/new-bounty">add bounties</Link>
                            </li>
                        </ul>
                        {/* <button className="inline-flex items-center bg-[#0f0f0f20] backdrop-blur-3xl text-[#fffc4b] border-2 border-[#fffc4b60] py-2 px-4 drop-shadow-[0px_0px_5px_#fffc4b40] focus:outline-none hover:bg-[#c5ff6820] hover:drop-shadow-[0px_0px_10px_#c5ff6840] transition-all rounded-xl text-base mt-0">
                            Login
                        </button>
                        <button className="inline-flex items-center bg-[#0f0f0f20] backdrop-blur-3xl text-[#c5ff68] border-2 border-[#c5ff6860] py-2 px-4 drop-shadow-[0px_0px_5px_#8bdce040] focus:outline-none hover:bg-[#c5ff6820] hover:drop-shadow-[0px_0px_10px_#c5ff6840] transition-all rounded-xl text-base mt-0">
                            Signup
                        </button> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header