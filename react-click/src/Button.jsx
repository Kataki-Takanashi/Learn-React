
function Button() {

    let count = 0;
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`You clicked me ${count} times`);
        } else {
            console.log(`${name} stop clicking me`);
        }
    }

    return (
        <button onClick={() => {handleClick("Ali")}}>Click Me! 😃</button>
    );
}

export default Button;