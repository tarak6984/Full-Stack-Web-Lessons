//JSON Object

[
    {
      "name": "personal",
      "href": 3
    },
    {
      "name": "work",
      "href": "http://www.google.com",
      "props": { "web": "http://www.google.com" }
    },
    {
      "name": "home",
      "href": true
    },
    {
      "name": "hobbies",
      "href": [ "green", 4, true, null ]
    }
  ]



  //JS Object
const buttons = [
    //edit button
    {
      name: 'edit',
      color: 'orange',
      edit(){
        console.log('I am editing!');
      }
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