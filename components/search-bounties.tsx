import React, { useState } from 'react';

type Props = {};

const SearchBounties = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Type here to search..."
                />
            </div>
            <div>
                {/* Display your Card components or search results here */}
                {/* You can pass the searchTerm as a prop to filter or fetch relevant data */}
                {/* Example: <Card searchTerm={searchTerm} /> */}
            </div>
        </div>
    );
};

export default SearchBounties;
