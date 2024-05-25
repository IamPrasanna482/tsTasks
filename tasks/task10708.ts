// Description


// const obj = { a: 1, b: 'hello', c: true };
// const updated = updateObject(obj, 'b', 'world');


// Function that takes object as first parameter and second parameter of take only keys of the object provided. Also value type should be same as the original
 



// function that updates a key in the passed object

function updateObject(object : object, key : string, updateValue : string){
    
    // edge case to check if key actually exists or not
    if(!(key in object)){
        return (`${key} does not exist.`);
    }
    
    // update the key
    object[key] = updateValue;
    return object;

}


let obj : {
    a : number,
    b : string,
    c : boolean } = 
    {
    a : 1,
    b : 'hello',
    c : true
    };


console.log(obj); // { a: 1, b: 'hello', c: true }

console.log(updateObject(obj,'b','world')); // { a: 1, b: 'world', c: true }
console.log(updateObject(obj,'e','world')); // e does not exist.

