import Link from 'next/link';
import React from 'react';

interface CardProps {
    name: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    link: string;
    pricing?: string;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: '2-digit' };
    return date.toLocaleDateString('en-IN', options);
};

const Card: React.FC<CardProps> = (props) => {
    const formattedStartDate = props.startDate ? formatDate(props.startDate) : '';
    const formattedEndDate = props.endDate ? formatDate(props.endDate) : '';    

    return (
        <Link href={props.link} className="leading-9">
            <div className="flex bg-[#ffffff10] backdrop-blur-[200px] hover:bg-[#ffffff20] transition-all hover:backdrop-blur-[200px] rounded-md p-8 flex-col">
                <div className="flex-grow">
                    <div className="flex items-center justify-between mb-[6px]">
                        <p className="text-white text-xl font-medium">{props.name}</p>
                        <p className="text-purple-100">{props.pricing}</p>
                    </div>
                    <div className="flex items-center justify-start mb-[20px]">
                        <div className="inline-block py-1 px-3 rounded-lg bg-[#581c8740] text-purple-300 text-xs">{formattedStartDate} - {formattedEndDate}</div>
                    </div>
                    <p className=" font-mono text-[#ffffff90] text-base">{props.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
