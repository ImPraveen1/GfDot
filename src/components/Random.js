import {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from './Spinner';

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
let API_KEY = "sRLnIkYwnWWmmN0BwQ9Ghqw5oBNRBgHi" 

function Random() {
const [gif, setGif] = useState('');
const [loading, setLoading] = useState('false');

async function fetchData() {
    setLoading(true);
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

       
    return (
      <div className='w-1/2 pb-3 pt-3  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[100px]'>

        <h1 className='text-2xl underline uppercase font-bold '>A Random Gif</h1>

        {
          loading ? (<Spinner/>) : ( <img src={gif} alt='random Gif'  className='flex justify-center' width='450'  />)
        }
       
        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg'
        >GENERATE
        </button>
      </div>
    )
  }
  export default Random;