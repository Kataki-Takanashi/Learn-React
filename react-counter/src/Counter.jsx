import React, { useState } from "react";

function Counter () {
    const decrementValue = 1;
    const incrementValue = 1;


    const [count, setCount] = useState(0);
    

    const increment = () => {
        count >= 0 ? setCount(count + incrementValue) : setCount(0);
    }
    const decrement = () => {
        count >= decrementValue ? setCount(count - decrementValue) : setCount(0);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );

}

export default Counter;