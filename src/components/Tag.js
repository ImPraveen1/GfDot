import {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from './Spinner';

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
let API_KEY = "sRLnIkYwnWWmmN0BwQ9Ghqw5oBNRBgHi" 

function Tag() {
  const [tag, setTag] = useState('car');
const [gif, setGif] = useState('');
const [loading, setLoading] = useState('false');

async function fetchData() {
    setLoading(true);
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
    setLoading(false) ;
}

useEffect( () => {
    fetchData();
},[])

    function clickHandler(){
      fetchData();
    }

    function changeHandler(event){
      setTag(event.target.value);
    }

       
    return (
      <div className='w-1/2 pb-3 pt-3  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[20px]'>

        <h1 className='text-2xl underline uppercase font-bold '> Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>) : ( <img src={gif} alt='random Gif'  className='flex justify-center' width='350'  />)
        }

        <input className='w-10/12 bg-white text-lg py-2 rounded-lg text-center'
        onChange={changeHandler}
        value={tag}
        />


        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg' 
        >GENERATE
        </button>
      </div>
    )
  }
export default Tag;