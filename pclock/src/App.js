import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
function App() {
  const audioBeep = useRef(null);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60*25);
  const [sessionType, setSessionType] = useState('Session');
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const decrementBreakLength = () => {
      const newBreakLength = breakLength - 60;
      //newBreakLength < 0 ? setBreakLength(0):setBreakLength(newBreakLength);
      if (newBreakLength > 0){
        setBreakLength(newBreakLength);
      }
  };

  const incrementBreakLength = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60*60){
      setBreakLength(newBreakLength);
    }
  };

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 60;
    //newSessionLength < 0 ? setSessionLength(0):setSessionLength(newSessionLength);
    if (newSessionLength > 0){
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLength = () => {
    const newSessionLength = sessionLength + 60;
    if (newSessionLength <= 60*60){
      setSessionLength(newSessionLength);
    }  
  };

  useEffect(() => {
    //console.log(sessionLength);
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect (() => {
    if (timeLeft === 0){
      audioBeep.current.play()
      if(sessionType === 'Session'){
        setSessionType('Break');
        setTimeLeft(breakLength)
      } else if (sessionType === 'Break'){
        setSessionType('Session')
        setTimeLeft(sessionLength)
      }
    }
  }, [breakLength, sessionLength, sessionType,  timeLeft])

  const isStarted = intervalId != null;
  const handlePlayPause = () => {
    if(isStarted){
        clearInterval(intervalId);
        setIntervalId(null);
    } else {
        const newIntervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
            /* const newTimeLeft = prevTimeLeft-1;
                if (newTimeLeft >= 0) {
                    return newTimeLeft;
                }
                audioBeep.current.play();
                //return prevTimeLeft;
                if (sessionType === 'Session') {
                    setSessionType('Break')
                    return breakLength;
                } else if (sessionType === 'Break'){
                    setSessionType('Session')
                    return sessionLength;
                }
              */
          }, 1000);
        setIntervalId(newIntervalId);
    };
  }
  const handleReset = () => {
    audioBeep.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setSessionType('Session');
    setSessionLength(25*60);
    setBreakLength(5*60);
    setTimeLeft(25*60);
    
  }
  return (
    <div className="App">
      <Break 
        breakLength = {breakLength}
        decrementBreakLength = {decrementBreakLength}
        incrementBreakLength = {incrementBreakLength}
      />
      <Session 
        sessionLength = {sessionLength}
        decrementSessionLength = {decrementSessionLength}
        incrementSessionLength = {incrementSessionLength}
      />
      <Timer
        isStarted = {isStarted ? 'Pause':'Play'}
        timeLeft = {timeLeft}
        handlePlayPause = {handlePlayPause}
        sessionType = {sessionType}
        breakLength = {breakLength}
        sessionLength = {sessionLength}
      />
      <button id = "reset" onClick ={handleReset}>Reset</button>
      <audio id = "beep" src = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref = {audioBeep} ></audio>
    </div>
  );  
}

export default App;
