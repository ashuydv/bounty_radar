import Card from '@/components/card'
import React from 'react'

type Props = {}

const Resources = (props: Props) => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-32 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-[60px] mb-4 text-white">Featured Resources 📚</h1>
                    <div className="w-[15%] h-2 rounded-xl mx-auto bg-purple-600"></div>
                </div>
                <div className="grid grid-cols-4 -m-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Resources