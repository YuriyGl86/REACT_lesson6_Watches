import { useEffect, useState } from "react"

export  function Watch({title, minutes, seconds, hour, onDel}) {
    const secondsInit ={
        sec:seconds,
        rotate: `rotate(${seconds * 6}deg)`
    }

    const minutesInit ={
        min:minutes + seconds/60,
        rotate: `rotate(${minutes * 6}deg)`
    }

    const hourInit ={
        hour:hour + minutes/60,
        rotate: `rotate(${hour * 30}deg)`
    }


    const [secondsDeg, setSecondsDeg] = useState(secondsInit)
    const [minutesDeg, setMinutesDeg] = useState(minutesInit)
    const [hourDeg, setHourDeg] = useState(hourInit)

    useEffect(()=>{
        const timerSeconds = setInterval(() => {
            setSecondsDeg(prev => ({sec: prev.sec+1, rotate:`rotate(${(prev.sec + 1) * 6}deg)`}))
            console.log('``')
        }, 1000);
        const timerMinutes = setInterval(() => {
            setMinutesDeg(prev => ({min: prev.min+1, rotate:`rotate(${(prev.min + 1) * 6}deg)`}))
            // setHourDeg(prev => ({hour: prev.hour+1/60, rotate:`rotate(${(prev.hour + 1/60) * 30}deg)`}))
        }, 60000);

        const timerHour = setInterval(() => {
            setHourDeg(prev => ({hour: prev.hour+1, rotate:`rotate(${(prev.hour + 1) * 30}deg)`}))
        }, 3600000);

        return () => {
            clearInterval(timerSeconds)
            clearInterval(timerMinutes)
            clearInterval(timerHour)
        }
    },[])

    const handleDel = ({target})=> {
        onDel(target.id)
    }

  return (
    <div className="watch-container">
        <h2>{title}</h2>
        <div className="watch">
            <div className="del" onClick={handleDel} id={title}>x</div>
            <div className="zero">12</div>
            <div className="three">3</div>
            <div className="six">6</div>
            <div className="nine">9</div>
            <div className="seconds" style={{transform: secondsDeg.rotate}}></div>
            <div className="minutes" style={{transform: minutesDeg.rotate}}></div>
            <div className="hour" style={{transform: hourDeg.rotate}}></div>
            <div className="sentr"></div>
        </div>
    </div>
  )
}
