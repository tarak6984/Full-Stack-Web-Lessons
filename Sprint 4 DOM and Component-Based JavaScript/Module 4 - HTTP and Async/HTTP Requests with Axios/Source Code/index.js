const theButton = document.getElementById('theButton');
const URL = "https://api.thecatapi.com/v1/categories"; 

// You might want to set an actual URL here

const grabTheData = (event) => {
  console.log('about to fetch data!');
  axios.get(URL)
  .then(res =>{
   console.log(res.data)
   event.target.textContent = res.data[0].name
  })
  .catch(err=>{
   debugger
  })
}

theButton.addEventListener('click', grabTheData);