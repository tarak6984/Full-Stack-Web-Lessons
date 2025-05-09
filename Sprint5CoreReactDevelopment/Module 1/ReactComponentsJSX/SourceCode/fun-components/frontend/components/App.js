import React from 'react'

export default function App() {
  const num =7;
  const id = "container"
  const ints = [1,2,3];
  const isHappy = true;
  return (
<>
  <div id = {id}>
    <h2 className='big'>Hello World</h2>
  </div>
  
  <div id = "container2">
  <h2 className='big'>{num+num}</h2>
</div>

{
ints.map(int=><div key={int}>{int}</div>)
}

{
  isHappy ? "I am pretty happy" : "having a bad day!"
}


</>
)
   
  
}
