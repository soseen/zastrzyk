import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/styles.css'
import Clock from './Clock'
import Injection from './Injection'

function App() {
  
  const [date, setDate] = useState(new Date());
  const scheduledInjectionHour1 = 9;
  const scheduledInjectionHour2 = 18;
  const scheduledInjectionHour3 = 22;
  const scheduledInjections = [scheduledInjectionHour1, scheduledInjectionHour2, scheduledInjectionHour3];

  useEffect(() => {
    const interval = setInterval(() => {
        setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
        <Clock date={date}/>
        <Injection scheduledHour={scheduledInjectionHour1} date={date} />
        <Injection scheduledHour={scheduledInjectionHour2} date={date} />
        <Injection scheduledHour={scheduledInjectionHour3} date={date} />
    </div>
  );
}

export default App;
