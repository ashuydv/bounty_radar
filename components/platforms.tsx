'use client';

import Card from './card'; // Adjust the import path as needed
import React, { useEffect, useState } from 'react';

interface Platforms {
    platformName: string,
    website: string,
}

const Loading: React.FC = () => (
    <div className="flex w-full">
        <p className="text-white text-lg">Loading...</p>
    </div>
);

const NoBounties: React.FC = () => (
    <div className="flex w-full">
        <p className="text-white text-lg">No platforms found</p>
    </div>
);

const Bounties: React.FC = () => {
    const [data, setData] = useState<Platforms[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/platforms/");
                const res = await response.json();
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="text-gray-400 body-font">
            <div className="container py-8 mx-auto ">
                {loading ? (
                    <Loading />
                ) : data.length === 0 ? (
                    <NoBounties />
                ) : (
                    <div className="grid md:grid-cols-2 gap-[20px]">
                        {data && data.map((item, index) => (
                            <Card key={index} name={item.platformName} link={item.website} description={item.website} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Bounties;
