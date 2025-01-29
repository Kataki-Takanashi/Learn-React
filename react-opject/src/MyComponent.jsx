import React, { useState } from "react";

function MyComponent() {

    const earliestYear = 1885;
    const latestYear = new Date().getFullYear();

    const [car, setCar] = useState({
        make: "Tesla",
        model: "Roadster",
        year: 2010,
    });

    function hgandleYearChange(e) { // This syntax is called destructuring assignment with the spread operator
        setCar(e.target.value < earliestYear ? 
            ((c) => ({...c, year: earliestYear})) : 
            e.target.value > latestYear ? 
            ((c) => ({...c, year: latestYear})) :
            (c) => ({...c, year: e.target.value})
        );
    }
    function handleMakeChange(e) {
        setCar((c) => ({...car, make: e.target.value})); // This would look like {year: 2019, make: "Tesla", model:"Roadster", year: 2011} but JS does not allow duplicate keys so the later value overwrites the previous one so its 2011 not 2010
    }
    function handleModelChange(e) {
        setCar((c) => ({...c, model: e.target.value})); // Allows for safe updates
    }

    return (
        <div>
            <p>You favorite car is a {car.make} {car.model} from {car.year}</p>
            <input type="number" value={car.year} onChange={hgandleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    );
}

export default MyComponent;