import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef();
    const startTimeRef = useRef();

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => clearInterval(intervalIdRef.current);
    }, [isRunning]);

    function startTimer() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }
    function stopTimer() {
        setIsRunning(false);

    }
    function resetTimer() {
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        const seconds = Math.floor(elapsedTime / (1000) % 60);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
    }

    const padZero = (number) => number < 10 ? `0${number}` : number;

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={startTimer} className="start-button">Start</button>
                <button onClick={stopTimer} className="stop-button">Stop</button>
                <button onClick={resetTimer} className="reset-button">Reset</button>
            </div>
            
        </div>
    );
}

export default Stopwatch;