import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        type: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const queryString = new URLSearchParams(searchParams).toString();
        navigate(`/pet-listings?${queryString}`); // Redirect to the pet listing page with filters
    };

    return (
        <form onSubmit={handleSubmit} className="input-group mb-3">
            {/* Location Selector */}

            <select
                name="location"
                className="form-control rounded-pill"
                value={searchParams.location}
                onChange={handleChange}
            >
                <option value="">Select location...</option>
                <option value="Vancouver, BC">Vancouver, BC</option>
                <option value="Seattle, WA">Seattle, WA</option>
                <option value="Kelowna, BC">Kelowna, BC</option>
                <option value="Langley, BC">Langley, BC</option>
            </select>
         
            {/* Type Selector */}
            <select
                name="type"
                className="form-select rounded-pill ms-2"
                value={searchParams.type}
                onChange={handleChange}
            >
                <option value="">All</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
            </select>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn btn-primary rounded-pill ms-2"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
