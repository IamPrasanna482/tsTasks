// const obj = { a: 1, b: 'hello', c: true };
// const updated = updateObject(obj, 'b', 'world');
// Function that takes object as first parameter and second parameter
//  of take only keys of the object provided. Also value type should be 
//  same as the original

export{}


// Generic function to make sure that a object is passed, the key passed to be updated should be the key of the object
// and the data to be updated must have the correct datatype.
function updateObject<TObj, K extends keyof TObj>(obj: TObj, key: K, value: TObj[K]) {
    obj[key] = value;
    return obj;
}

// create a type for the users object
type UserObject = {
    a : number,
    b : string,
    c : boolean
}

// create a user object
const u1 : UserObject =  {
    a  : 1,
    b : 'hello',
    c : true
}

// function calling
console.log(updateObject(u1,'c', false)); 
console.log(updateObject(u1,'c', 'world')); // error

console.log(updateObject(u1,'b','world')); 
console.log(updateObject(u1,'b', 2134)); // error



