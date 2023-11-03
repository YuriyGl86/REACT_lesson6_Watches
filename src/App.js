import { Watch } from './components/Watch/Watch';
import './App.css';
import { AddWatchForm } from './components/AddWatchForm';
import { useState } from 'react';
import { WatchList } from './components/WatchList';


function App() {
  const [watches, setWatches] = useState([])

  const addWatch = (value) => {
    setWatches(prev=>{
      return [...prev, value]
    })
  }

  const onDel= (id)=>{
    setWatches(prev=>{
      return prev.filter(watch => watch.name !== id)
    })
  }


  return (
    <div className="App">
      <AddWatchForm callbackSubmit={addWatch}/>
      <WatchList list = { watches } onDel={ onDel }/>
      {/* <Watch title={'watch'} minutes={15} seconds={30} hour={18}/> */}
    </div>
  );
}

export default App;
