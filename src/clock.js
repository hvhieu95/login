import React,  {useState, useEffect} from "react";

export function Clock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timerID);
    }, []);
    return (
        <div className="clock">
        <span className="text">
        <span>{time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
        </span>
    </div>
    );
    }