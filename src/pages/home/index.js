import React from 'react'
import './index.css'

// Data
// import Gif from '../../data/gif'
import Gifs from '../../data/gifs'

// Components
import SearchBar from '../../components/search-bar';
import ListItem from '../../components/list-item';
import ChildrenItem from '../../components/children-item'

const index = () => {

    // const { url, title } = Gifs;

    // console.log(Gifs)

    const listImg = Gifs.map((gif) => {
        if(gif.rating === 'g') {
            return <ListItem key={gif.id} url={gif.url} alt={gif.title} rating={gif.rating} />
        }

        // gif.rating === 'g' && <ListItem key={gif.id} url={gif.url} alt={gif.title} rating={gif.rating} />
    }) 

    return (
        <>
            <SearchBar />

            {/* {listImg} */}
            
            <div className="list">
                {/* {Gifs.filter((gif) => gif.rating === 'g').map((gif) => {
                    return(
                        <ListItem key={gif.id} url={gif.url} alt={gif.title} rating={gif.rating} />
                    )
                })} */}

                { Gifs && listImg }
            </div>

            {/* <ChildrenItem color="blue">
                <h1>Contoh Children</h1>
                <p>Tes</p>
            </ChildrenItem> */}
        </>
    )
}

export default index