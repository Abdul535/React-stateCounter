import React,{useState} from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  return(
    <>
    <h1>The count is {count}</h1>
    <button onClick={() => setCount(0)}>Reset</button>
    <button onClick={() => count >= 10 ? "" :setCount(count+1)}>Increase</button>
    <button onClick={() => count <= 0 ?"":setCount(count-1)}>Decrease</button>
    </>
  )
}


export default App;
