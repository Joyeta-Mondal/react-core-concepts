
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';




function App() {
 
  function handleClick(){
    alert('Button clicked!');
  }

  function calculateMul (num) {
    alert(num * 3.4);
  }

  return (
    <>
      
      <h3>React Core Concepts</h3>
      <Counter></Counter>
      <Users></Users>
      <Friends></Friends>
     <Team></Team>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() =>{alert('button 2 clicked')}}>Click 2</button>
      <button onClick={() =>{
        calculateMul(4)
      }}>Multiplication</button>
    </>
  )
}

export default App
