import React from 'react';
import './index.css';

const index = () => {
    return (
        <form>
            <input type="text" id="search" name="search" className="search" autoComplete="off"></input>
            <input type="submit" value="Search" className="submit"></input>
        </form>
    )
}

export default index