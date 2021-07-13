import React from 'react'
import './index.css'

// Components
import SearchBar from '../../components/search-bar';

const index = () => {
    let src = 'https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif';
    return (
        <>
            <SearchBar />
            <img src={src} className="img" alt="megaman" />
        </>
    )
}

export default index