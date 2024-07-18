import List from "./List";
import "./App.css";

function App() {
  const fruit = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrot", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {fruit.length > 0 ? <List items={fruit} category="fruit" /> : null}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables" />
      )}
    </>
  );
}

export default App;
