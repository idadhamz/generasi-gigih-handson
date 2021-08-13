import React, { useState, useEffect } from "react";
import "./index.css";

// Data
// import Gif from '../../data/gif'
// import Gifs from '../../data/gifs'

// Components
import SearchBar from "../../components/search-bar";
import ListItem from "../../components/list-item";
// import ChildrenItem from '../../components/children-item'

//Redux
import { useAppDispatch, useAppSelector } from "../../hooks";
import { giphyValue, getImageGifs } from "../../slices/giphy-slices";

const index = () => {
  const dispatch = useAppDispatch();
  const Gifs = useAppSelector(giphyValue);
  // const Gifs = [];
  console.log(Gifs);
  const [input, setInput] = useState("");

  useEffect(() => {
    getGifs("Spiderman")
  }, [])

  const handleChange = (e: any) => setInput(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getGifs();
  };

  const getGifs = async (value?: string) => {
    const api_key = process.env.REACT_APP_GIPHY_KEY;
    const q = value ? value : input;
    const limit = 13;
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=${limit}`;

    const dataGif = await fetch(endpoint).then((res) => res.json());
    dispatch(getImageGifs(dataGif.data));
  };

  const listGifs = Gifs.map(
    (gif: any) =>
      gif.rating == "g" && (
        <ListItem
          key={gif.id}
          url={gif.images.original.url}
          alt={gif.title}
        />
      )
  );

  return (
    <>
      <SearchBar
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* {listGifs} */}

      <div className="items">
        {/* {Gifs.filter((gif) => gif.rating === 'g').map((gif) => {
                    return(
                        <ListItem key={gif.id} url={gif.url} alt={gif.title} rating={gif.rating} />
                    )
                })} */}

        {listGifs}
      </div>

      {/* <ChildrenItem color="blue">
        <h1>Contoh Children</h1>
        <p>Tes</p>
    </ChildrenItem> */}
    </>
  );
};

export default index;
