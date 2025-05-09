

import './App.css'

function App() {

 const handleClick = () =>{
  alert("Hey! I am clicked!")
 }

  
 const handleMouseOver= () =>{
  alert("Hey I am a mouseover");
 }


  return (
    <>
<div className="button">
  <button onClick = {handleClick}>Click me!</button>
</div>
<div className="red" onMouseOver={handleMouseOver}>
  I am a red div
</div>
    </>
  )
}

export default App
