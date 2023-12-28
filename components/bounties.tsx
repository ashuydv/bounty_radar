import React from 'react'
import Card from './card'

type Props = {}

const Bounties = (props: Props) => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-32 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-[60px] mb-4 text-white">featured bounties ⭐</h1>
                    <div className="w-[15%] h-2 rounded-xl mx-auto bg-purple-600"></div>
                </div>
                <div className="grid grid-cols-4 -m-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <button className="flex mx-auto text-white mt-20 bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded-xl shadow-2xl shadow-purple-400 text-lg">
                    View More
                </button>
            </div>
        </section>
    )
}

export default Bounties