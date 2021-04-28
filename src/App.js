/*function App() {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <ul>
        {items.map((item) => (
          <div>
            <li>{item}</li>
            <button>+</button>
            <button>-</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

import Li from "./component/Li";

function App() {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          <Li data={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
