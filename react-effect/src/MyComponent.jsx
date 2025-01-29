import React, { useState, useEffect } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    useEffect(() => {document.title = `Count: ${count} ${color}`, [count, color]});

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={() => setCount(c => c - 1)}>Subtract</button><br/>
            <button onClick={() => setColor(c => c === 'green' ? 'red' : 'green')}>Change Color</button>
        </>
    );
}

export default MyComponent;