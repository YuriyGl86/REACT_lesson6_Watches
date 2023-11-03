import moment from 'moment';
import { Watch } from '../Watch/Watch';

export  function WatchList({ list, onDel }) {
  return (
    <div className="watchList-container">
        {list.map(watch=>{
            // console.log(watch)
            const now = moment()
            // console.log(now.minute(), now.second(), now.hour())
            return <Watch 
            title={watch.name} 
            minutes={now.minute()} 
            seconds={now.second()} 
            hour={now.hour() + Number(watch.zone)}
            key={watch.name}
            onDel={onDel}
            />
        })}
    </div>
  )
}
