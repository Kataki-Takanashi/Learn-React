import ComponentB from "./ComponentB";

function ComponentA() {

    return (
        <div className="box">
            <p>Component A</p>
            <ComponentB/>
        </div>
    );
}

export default ComponentA;