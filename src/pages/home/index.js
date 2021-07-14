import React from 'react'
import './index.css'

// Data
import Gif from '../../data/gif'

// Components
import SearchBar from '../../components/search-bar';
import ListItem from '../../components/list-item';
import ChildrenItem from '../../components/children-item'

const index = () => {

    const { url, title } = Gif;

    return (
        <>
            <SearchBar />
            <ListItem url={url} title={title} />
            {/* <ChildrenItem color="blue">
                <h1>Contoh Children</h1>
                <p>Tes</p>
            </ChildrenItem> */}
        </>
    )
}

export default index