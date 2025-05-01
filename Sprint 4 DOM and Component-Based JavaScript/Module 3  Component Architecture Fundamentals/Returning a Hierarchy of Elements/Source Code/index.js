const links = [
    { name: 'personal',
      href: 'http://www.bloomtech.com'
    },
    { name: 'work',
      href: 'http://www.google.com'
    },
    { name: 'home',
      href: 'http://www.bing.com'
    },
    { name: 'hobbies',
      href: 'http://www.yahoo.com'
    },
    {
      name: "sports",
      href: "https://www.bbc.com/sport"
    }
  ];
  
  function createNav(array) {
    const nav = document.createElement('nav');
    array.forEach(element => {
      const newEl = document.createElement('a');
      newEl.setAttribute('href', element.href);
      newEl.textContent = element.name;
      nav.appendChild(newEl);
    });
    return nav;
  }
  
  // Get the container element from the HTML
  const navigationContainer = document.getElementById('navigation-container');
  
  // Create the navigation element
  const navElement = createNav(links);
  
  // Append the created navigation element to the container in the DOM
  navigationContainer.appendChild(navElement);
  
  // You can still log the created element to the console if you want to inspect it
  console.log(navElement);