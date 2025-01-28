
function Button() {

    
    const handleClick = (e) => {
        e.target.textContent = "OUCH! 😱";
        setTimeout(() => {e.target.textContent = "Click Me! 😃";}, 1000);
    }

    return (
        <button onClick={(e) => {handleClick(e)}}>Click Me! 😃</button>
    );
}

export default Button;