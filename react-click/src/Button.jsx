
function Button() {

    
    const handleClick = (e) => {
        e.target.textContent = "Clicked! 😄";
        setTimeout(() => {e.target.textContent = "Click Me! 😃";}, 1000);
    }

    const handleDoubleClick = (e) => {
        e.target.textContent = "OUCH! 🤕";
        setTimeout(() => {e.target.textContent = "Click Me! 😃";}, 1000);
    }

    return (
        <button onClick={(e) => {handleClick(e)}} onDoubleClick={(e) => {handleDoubleClick(e)}}>
            Click Me! 😃
        </button>
    );
}

export default Button;