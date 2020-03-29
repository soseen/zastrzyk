import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/styles.css'
import Clock from './Clock'
import Injection from './Injection'
import NewInjectionRule from './NewInjectionRule'
import defaultInjections from '../data/injections'

const App = () => {
  
  const [date, setDate] = useState(new Date());
  const [injections, setInjections] = useState(defaultInjections);

  useEffect(() => {
    const interval = setInterval(() => {
        setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const addInjection = (injection) => {
    setInjections(
        [...injections, injection]
          .sort((a,b) => a.scheduledHour - b.scheduledHour)
    );
  }

  const removeInjection = (injection) => {
    setInjections(
      injections
        .filter(item => item.scheduledHour !== injection.scheduledHour)
    );
  }

  return (
    <div className="App">
        <Clock date={date}/>
        {injections.map((injection) => (
          <Injection injection={injection} date={date} removeInjection={removeInjection} />
        ))}
        <NewInjectionRule injections={injections} addInjection={addInjection} />
    </div>
  );
}

export default App;
