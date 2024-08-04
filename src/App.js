import Random from './components/Random';
import Tag from './components/Tag';

import './App.css';

function App() {
  return (
    <div className="bg-green-300 w-full h-screen flex flex-col items-center background relative  ">
    <h1 className="bg-white absolute mt-10 rounded-[8px] px-10 py-2 text-3xl w-11/12 font-bold mx-auto text-center">RANDOM GIF</h1>
     <div className='flex flex-col  w-full items-center absolute'>
  
     <Random/>
  
     <Tag/>

     </div>
    </div>
  );
}

export default App;
