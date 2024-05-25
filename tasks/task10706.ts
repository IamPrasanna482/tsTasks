// Description

// EditPreview     
// <pre><code class="javascript">
// const add = (a: number, b: number): number => a + b;
// const loggedAdd = loggerWrapper(add);

// const value = loggedAdd(3, 5);
// </code></pre>

// Should log: "Calling function add with arguments: 3, 5" and give output
 
const add = (a: number, b: number): number => a + b;
const loggedAdd = loggerWrapper(add);

const value = loggedAdd(3, 5);
Should log: "Calling function add with arguments: 3, 5" and give output

const add = (a: number, b: number): number => a + b;

// Higher-order function to wrap a function with logging

const loggerWrapper = (func: (...args: any[]) => any) => {
  return (...args: any[]): any => {
    console.log(`${func.name} is called with arguments:`, ...args);
    return func(...args);
  };
};


// pass the add function to loggerWrappper function
const loggedAdd = loggerWrapper(add);


const main = () => {

    const value = loggedAdd(3, 5);

    // output the value
    console.log(value); // Output: 8

}

main();
