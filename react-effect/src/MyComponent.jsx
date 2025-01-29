import React, { useState, useEffect } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    useEffect(() => {document.title = `Count: ${count}`, [count]});

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    );
}

export default MyComponent;