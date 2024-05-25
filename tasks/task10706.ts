const add = (a: number, b: number): number => a + b;

// Higher-order function to wrap a function with logging

const loggerWrapper = <T extends (...args: any[]) => any>(func: T) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    console.log(`${func.name} is called with arguments:`, ...args);
    return func(...args);
  };
};

// pass the add function to loggerWrappper function
const loggedAdd = loggerWrapper(add);


const value = loggedAdd(3, 5);

// output the value
console.log(value); // Output: 8

