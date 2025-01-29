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
                <button onClick={startTimer} className="start-button">Start</button>
                <button onClick={stopTimer} className="stop-button">Stop</button>
                <button onClick={resetTimer} className="reset-button">Reset</button>
            </div>
            
        </div>
    );
}

export default Stopwatch;