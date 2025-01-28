import List from "./List";

function App() {

  const fruits = [
    {id: 1, name: "Apple", calories: 95}, 
    {id: 2, name: "Banana", calories: 46}, 
    {id: 3, name: "Orange", calories: 73}, 
    {id: 4, name: "Mango", calories: 27}, 
    {id: 5, name: "Pineapple", calories: 24},
  ];

  const vegetables = [
    {id: 1, name: "Potato", calories: 110},
    {id: 2, name: "Celery", calories: 15},
    {id: 3, name: "Carrot", calories: 20},
    {id: 4, name: "Corn", calories: 100},
    {id: 5, name: "Broccoli", calories: 50},
  ];


  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="fruits"/>} {/* The && is similar to the turnary operator. but it does nothing if the condition is false */}
      {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>} {/* The || is the inverse of the && operator. It does nothing if the condition is true */}
    </>
  );
}

export default App
