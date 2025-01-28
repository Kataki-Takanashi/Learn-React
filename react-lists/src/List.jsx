
function List() {

    const fruits = [
        {id: 1, name: "Apple", calories: 95}, 
        {id: 2, name: "Banana", calories: 46}, 
        {id: 3, name: "Orange", calories: 73}, 
        {id: 4, name: "Mango", calories: 27}, 
        {id: 5, name: "Pineapple", calories: 24},
    ];
    fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order by name
    fruits.sort((a, b) => a.calories - b.calories); //  calories sort low to high

    const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 75);
    const highCalorieFruits = fruits.filter((fruit) => fruit.calories >= 75);


    const listItems = lowCalorieFruits.map((fruit) => <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                {fruit.calories} calories
                                            </li>);

  return (
    <ol>
      {listItems}
    </ol>
  );
}

export default List;