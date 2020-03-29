import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const NewInjectionRule = ({injections, addInjection}) => {

    const defaultInj = {
        description: 'Zastrzyk',
        scheduledHour: 1,
        reminderDuration: 20
    }
    
    const [isFormActive, setIsFormActive] = useState(false);
    const [injection, setInjection] = useState(defaultInj);

    const displayForm = () => {
        if(!isFormActive){
            setIsFormActive(true);
        }
    }

    const handleChange = ({target:{name,value,type}}) => {
        setInjection({...injection, [name]: name === 'scheduledHour' || name === 'reminderDuration' ? parseInt(value) : value});
        console.log(value);
    }

    const handleNewInjection = () => {
        let noDuplicates = true;
        injections.forEach(element => {
            console.log(element);
            if(element.scheduledHour === injection.scheduledHour){
                noDuplicates = false;
            }
        });

        if(noDuplicates){
            addInjection(injection)
            setIsFormActive(false);
        }
    }
    
    return(
        <div className='new-injection'>
            <div className='new-injection-button' onClick={displayForm}>
                <i class="fa fa-plus"></i>
            </div>
            {isFormActive &&
                <div className='new-injection-form'>
                    <div className='form-inputs-row'>
                        <div className='form-inputs-column'>
                            <label>Descritpion</label>
                            <input className='description-input' type='text' name='description' maxLength={10} value={injection.description} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className='form-inputs-row'>
                        <div className='form-inputs-column'>
                            <label>Time of injection</label>
                            <select className='hour-input' name='scheduledHour' value={injection.scheduledHour} onChange={handleChange}>
                                    <option value={1}>1:00</option>
                                    <option value={2}>2:00</option>
                                    <option value={3}>3:00</option>
                                    <option value={4}>4:00</option>
                                    <option value={5}>5:00</option>
                                    <option value={6}>6:00</option>
                                    <option value={7}>7:00</option>
                                    <option value={8}>8:00</option>
                                    <option value={9}>9:00</option>
                                    <option value={10}>10:00</option>
                                    <option value={11}>11:00</option>
                                    <option value={12}>12:00</option>
                                    <option value={13}>13:00</option>
                                    <option value={14}>14:00</option>
                                    <option value={15}>15:00</option>
                                    <option value={16}>16:00</option>
                                    <option value={17}>17:00</option>
                                    <option value={18}>18:00</option>
                                    <option value={19}>19:00</option>
                                    <option value={20}>20:00</option>
                                    <option value={21}>21:00</option>
                                    <option value={22}>22:00</option>
                                    <option value={23}>23:00</option>
                                    <option value={0}>00:00</option>
                            </select>
                        </div>
                        <div className='form-inputs-column'>
                            <label>Reminder duration</label>
                            <input className='minutes-input' type='number' name='reminderDuration' min={1} max={59} value={injection.reminderDuration} onChange={handleChange}></input>
                        </div>
                    </div>
                    <button type='submit' onClick={handleNewInjection} className='add-injection-button'>Add</button>
                </div>
            }
        </div>
    );
}

export default NewInjectionRule