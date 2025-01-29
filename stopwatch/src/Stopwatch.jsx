import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef();
    const startTimeRef = useRef();

    useEffect(() => {

    }, [isRunning]);

    function startTimer() {

    }
    function stopTimer() {

    }
    function resetTimer() {

    }

    function formatTime(time) {

        return "00:00:00"; // TODO: Format the time
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            
        </div>
    );
}

export default Stopwatch;