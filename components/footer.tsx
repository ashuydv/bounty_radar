import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto flex items-center justify-center flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl">BountyRadar</span>
                </a>
                <p className="text-sm text-purple-100 mt-1">© 2024 -
                    <a href="https://twitter.com/ashu_ydv18" className="text-purple-50 ml-1" target="_blank" rel="noopener noreferrer">@ashu_ydv18</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer