// I looked upon 'infer' keyword that recursively reverses tuple while maintaing the order of the type, but found it difficult
// to implement it, I will study about 'infer' tomorrow more deeply and implement it in this problem.

// Function to reverse the tuple
function reverseTuple(tuple: any[]): any[] {
  return tuple.reverse();
}

const arr = [42, 'hello', true];

// call the reverseTuple Function
const reversedTuple = reverseTuple(arr);

console.log(reversedTuple); // [true, 'hello', 42]
