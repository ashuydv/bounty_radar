import React from 'react'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="p-4">
            <div className="flex bg-[#0a0a0a] drop-shadow-[0px_0px_1px_#c444ff30] rounded-xl p-8 flex-col">
                <div className="flex-grow">
                    <p className="text-white text-2xl font-semibold mb-3">Shooting Stars</p>
                    <p className="leading-relaxed avgardd font-normal text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                </div>
            </div>
        </div>
    )
}

export default Card