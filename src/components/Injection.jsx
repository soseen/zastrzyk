import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import notification from '../audio/notification.mp3'

const Injection = ({scheduledHour, date}) => {

    const [injectionDone, setInjectionDone] = useState(false);
    const [highlight, setHighlight] = useState(false);
    const audio = new Audio(notification);

    useEffect(() => {
        if(highlight === false && injectionDone === false && (scheduledHour - date.getHours()) === 1 && date.getMinutes() > 40){
            console.log(scheduledHour);
            setHighlight(true);
            audio.play();
        } else if(highlight === true && injectionDone === false && (scheduledHour - date.getHours()) !== 1){
            setHighlight(false);
        }
    }, [highlight, injectionDone, date, scheduledHour]);


    const handleInjection = (e) => {
        if(!injectionDone && highlight){
            setHighlight(false);
        }
        setInjectionDone(!injectionDone);
        audio.play();
    }

    return(
        <div onClick={handleInjection} className={`injection ${injectionDone ? 'injected' : ''} ${highlight ? 'highlighted' : ''}`}>
            <div className='injection-description'>
                <p>Zastrzyk</p>
            </div>
            <div className='injection-time'>
                <p>{`${scheduledHour}:00`}</p>
            </div>
        </div>
    )
}

export default Injection