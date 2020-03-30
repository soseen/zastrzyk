import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import notification from '../audio/notification.mp3'

const Injection = ({injection, date, removeInjection}) => {

    const [injectionDone, setInjectionDone] = useState(false);
    const [highlight, setHighlight] = useState(false);
    const audio = new Audio(notification);

    useEffect(() => {
        if(highlight === false && injectionDone === false && (injection.scheduledHour - date.getHours()) === 1 && date.getMinutes() >= (60 - injection.reminderDuration)){
            setHighlight(true);
            audio.play();
        } else if (highlight === true && injection.scheduledHour - date.getHours() <=0){
            setHighlight(false);
        }
    }, [highlight, injectionDone, date, injection]);

    useEffect(() => {
            if(highlight){
                audio.play();
            }
      }, [date.getMinutes()]);

      useEffect(() => {
        if(date.getHours() === 0 && date.getMinutes() === 0){
            setInjectionDone(false);
        }
      }, [date.getHours()]);

    const handleInjection = (e) => {
        if(!injectionDone && highlight){
            setHighlight(false);
        }
        setInjectionDone(!injectionDone);
    }


    return(
        <div onClick={handleInjection} className={`injection ${injectionDone ? 'injected' : ''} ${highlight ? 'highlighted' : ''}`}>
            <div className='injection-description'>
                <div className='desc'>
                    <div className='remove-injection-button' onClick={e => removeInjection(injection)}>
                    <i class="fa fa-trash"></i>
                    </div>
                    <p>{injection.description}</p>
                </div>
                <div className='schedule'>
                    <p>{`${injection.scheduledHour}:00`}</p>
                </div>
            </div>
        </div>
    )
}

export default Injection