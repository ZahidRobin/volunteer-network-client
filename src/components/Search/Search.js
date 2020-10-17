import React from 'react';
import './Search.css';
const Search = () => {
    return (
        <div className="row search-section">
            <div className="col-md-8 offset-md-2">
                <div className="text-center">
                    <h2>I grow up by helping people in need.</h2>
                    <input type="text" placeholder="Search...."/>
                    <input type="submit" value="Search"/>
                </div>
            </div>
        </div>
    );
};

export default Search;