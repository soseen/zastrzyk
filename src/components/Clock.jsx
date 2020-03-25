import React from 'react'
import { useState } from 'react'


const Clock = ({date}) => {

    const time = (`0` + date.getHours().toLocaleString()).slice(-2) + ' : ' + (`0` + date.getMinutes()).slice(-2) + ' : ' + (`0` + date.getSeconds()).slice(-2);

    

    return(
        <div className='clock'>
            <p className='time'>{time}</p>
        </div>
    )
}

export default Clock