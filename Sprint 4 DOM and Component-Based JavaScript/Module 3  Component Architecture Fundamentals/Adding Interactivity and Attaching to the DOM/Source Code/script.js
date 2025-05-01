const buttons = [
    {
      name: 'edit',
      color: 'orange',
    },
    {
      name: 'delete',
      color: 'lightgrey'
    },
    {
      name: 'complete',
      color: 'red'
    },
  ];
  
  function handleClick(event) {
    console.log(`You clicked the ${event.target.textContent} button`);
  }
  
  function createButtons(array){
    const btnDiv = document.getElementById('btn');
    array.forEach(element => {
      const newEl = document.createElement('button');
      newEl.style.backgroundColor = element.color;
      newEl.classList.add('btn'); // Add a class for potential common styling
      newEl.textContent = element.name;
      btnDiv.appendChild(newEl);
      newEl.addEventListener('click', handleClick);
    });
    return btnDiv;
  }
  
  createButtons(buttons);