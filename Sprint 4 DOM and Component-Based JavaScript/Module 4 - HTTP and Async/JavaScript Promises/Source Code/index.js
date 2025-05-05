



// Example 1

const asyncFunction = () => {
    return new Promise((resolve, reject) => {
      // perform some async action
    });
  };


  
/*
   Easy:
  This code creates a function called asyncFunction.

  It returns a Promise, which means it does something in the background.

  When the task is done, it can either:
  - succeed (call resolve)
  - or fail (call reject)

  Whoever uses this function can wait for it and handle success with .then() or failure with .catch().
*/



/*
 Pro:
  This defines a constant arrow function named 'asyncFunction'. 
  Arrow functions are a modern and concise way to write functions in JavaScript.

  The function returns a new Promise, which is a built-in object used to handle asynchronous operations.
  A Promise represents a value that may be available now, in the future, or never if it fails.

  The Promise constructor takes a function with two parameters:
  - 'resolve': a function to call when the asynchronous task completes successfully.
  - 'reject': a function to call if there is an error or the task fails.

  Inside this function, you'd write your async task—like a timer, data fetch, or API call.
  When the task finishes:
  - You call resolve(someValue) to say "It worked!"
  - Or reject(someError) to say "It failed!"

  This makes it possible for the caller of asyncFunction to use:
  - .then() to handle success
  - .catch() to handle errors

  This structure is part of how modern JavaScript handles operations that take time,
  allowing code to run smoothly without freezing or waiting.
*/




// Example 2

asyncFunction()
  .then(() => {
    console.log("async stuff finished");
  })
  .catch(() => {
    console.log("async stuff rejected");
  });


/*
Easy Explanation:
  This code runs the asyncFunction, which does something in the background (asynchronously).

  If everything works and the task is successful, .then() runs.
  It shows the message "async stuff finished" in the console.

  If something goes wrong, .catch() runs instead.
  It shows the message "async stuff rejected" in the console.

  This is how we handle success and error when using promises in JavaScript.
*/



/*
Pro explanation: 
  This code calls the function 'asyncFunction', which returns a Promise—
  a special object in JavaScript that represents the eventual result
  (success or failure) of an asynchronous operation.

  The .then() method is chained to handle the case when the Promise is successfully resolved.
  Inside the .then() block, an arrow function is provided that logs
  "async stuff finished" to the console. This means that if the asynchronous
  task completes successfully (i.e., the 'resolve' function is called inside the Promise),
  this message will be displayed.

  The .catch() method is chained to handle the case when the Promise is rejected.
  If an error occurs or the operation fails (i.e., the 'reject' function is called),
  the arrow function inside .catch() runs and logs "async stuff rejected" to the console.

  This pattern (.then().catch()) is commonly used in JavaScript to handle
  asynchronous code in a readable and structured way, clearly separating
  what to do when things go right versus when they go wrong.
*/




// Example 3

const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
      const asyncFinishesSuccessfully = true;
      const dataObject = { name: "Sabbir", task: "Learning Promises" };
      const errorMessage = "Something went wrong!";
  
      if (asyncFinishesSuccessfully) {
        resolve(dataObject);
      } else {
        reject(errorMessage);
      }
    });
  };
  
  asyncFunction1()
    .then(data => console.log("Success:", data))
    .catch(err => console.log("Error:", err));
  

    // Explanation

    /*
This code defines an asynchronous function named `asyncFunction1` using an arrow function syntax. The function returns a new Promise, which is a built-in JavaScript object used to handle asynchronous operations. A Promise represents a task that may complete in the future, either successfully (resolved) or with an error (rejected).

Inside the Promise, a variable named `asyncFinishesSuccessfully` is set to `true`, meaning the asynchronous task is assumed to be successful for this example. There are also two other variables: `dataObject`, which holds a sample object with a `name` and `task`, and `errorMessage`, a string to represent what would be returned if something went wrong.

The if-else statement is used to simulate the outcome of the asynchronous operation. If `asyncFinishesSuccessfully` is `true`, the `resolve()` function is called with the `dataObject`, meaning the promise was successful. Otherwise, the `reject()` function is called with the `errorMessage`, simulating a failure.

After defining the function, it is invoked with `asyncFunction1()`. This returns a Promise, so the `.then()` method is used to handle a successful result, logging the returned `dataObject` to the console with a "Success:" label. If the Promise is rejected, the `.catch()` method will catch the error and log it with an "Error:" label.

In summary, this code demonstrates how to manually create and handle a Promise in JavaScript, including resolving and rejecting it based on conditions. It's useful for learning how asynchronous flows work, and how to use `.then()` and `.catch()` to manage the result of asynchronous code in a clean and readable way.
*/



// Example 4 - variation 1

let time = 0;
const timeMachineX = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((time += 1000));
    }, 1000);
  });
};

timeMachineX().then(newTime => {
  console.log(newTime);
});


// Explanation


/*
This code simulates a simple "time machine" using JavaScript's asynchronous features, specifically Promises and `setTimeout`. It demonstrates how to perform an action after a delay and handle the result asynchronously using `.then()`.

First, a variable `let time = 0;` is declared and initialized to zero. This variable is used to track the simulated time.

Then, a function `timeMachine` is defined as an arrow function that returns a Promise. Inside the Promise, the asynchronous operation is handled by `setTimeout`, which schedules a function to run after 1000 milliseconds (1 second).

After one second, the code inside `setTimeout` executes. It increments the `time` variable by 1000 (to simulate the passage of 1 second in milliseconds), and then calls the `resolve()` function with the updated `time` value. Calling `resolve()` indicates that the asynchronous task was successful and passes the result to the next step.

Finally, the `timeMachine()` function is invoked. Since it returns a Promise, the `.then()` method is used to handle the resolved value. When the Promise resolves (after 1 second), the updated `time` value (which will be 1000) is passed to the callback inside `.then()`, and `console.log(newTime);` prints it to the console.

In summary, this code shows how to simulate a delay using `setTimeout` inside a Promise, and how to use `.then()` to handle the result once the asynchronous operation completes. It's a good demonstration of basic asynchronous control flow in JavaScript.
*/



// Example 4 - variation 2


let time2 = 0;
const timeMachine2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((time2 += 1000));
    }, 1000);
  });
};

timeMachine2().then(newTime => {
  const myTime = newTime/1000;
  return  `${myTime} seconds have passed`
})
.then(newString =>{
  console.log(newString)
})


// Explanation 

/*
This code simulates a delay using JavaScript Promises and shows how time can be tracked and displayed after an asynchronous operation.

First, the variable `let time2 = 0;` is declared and initialized to 0. It will be used to store the time passed in milliseconds.

Next, a function called `timeMachine2` is defined. This function returns a Promise, which is a way to handle asynchronous operations (things that take time, like waiting).

Inside the Promise, `setTimeout` is used to wait for 1 second (1000 milliseconds). After the delay, it increases `time2` by 1000 and resolves the promise with the new value of `time2`.

When `timeMachine2()` is called, it starts the 1-second delay. After the delay, the `.then()` block receives the new `time2` value (which is now 1000). This value is divided by 1000 to convert it to seconds and stored in `myTime`. Then, a string like `"1 seconds have passed"` is returned.

Another `.then()` block follows, which receives that string and prints it to the console using `console.log()`.

In simple words, this code waits 1 second, calculates how many seconds have passed, and then prints a message saying how much time has passed. It's a basic and clear way to understand how Promises and `.then()` chaining work in JavaScript.
*/






// Example 4 - variation 2


const timeMachineUltra = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time >= 1000) {
        resolve(time);
      } else {
        reject('Not enough time passed in');
      }
    }, time);
  });
};

timeMachineUltra(1000)
  .then(newTime => {
    const myTime = newTime / 1000;
    return `${myTime} seconds have passed`;
  })
  .catch(err => {
    console.log(err);
  });












const timeMachine = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time >= 1000) {
        resolve(time);
      } else {
        reject('Not enough time passed in');
      }
    }, time);
  });
};

timeMachine(1000)
  .then(newTime => {
    const myTime = newTime / 1000;
    return `${myTime} seconds have passed`;
  })
  .catch(err => {
    console.log(err);
  });