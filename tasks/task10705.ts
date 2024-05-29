/*
Description

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = deepMerge(obj1, obj2);

Merged should have type { a: number; b: { c: number; d: number; }; e: number; }

Challenge1: If object have a same key with different value type, then it should persist the type of second object key value which is passed as parameter
Challenge2: Give type error if not of same primitive type.

*/

// function deepMerge2<T extends object, U extends object>(object1: T, object2: U): Object {
//     for(let key in object2){
//         if (object2.hasOwnProperty(key)) {
//         if((typeof object2[key] == 'object') && (typeof object1[key] == 'object')){
//             object1[key] = deepMerge2(object1[key], object2[key]);
//         }
//         else{
//             object1[key] = object2[key];
//         }
//     }
// }
// return object1;
// }


function deepMerge(obj1 :Object, obj2 : Object): Object {

    for(let key in obj2){
        if (obj2.hasOwnProperty(key)) {
        if((typeof obj2[key] == 'object') && (typeof obj1[key] == 'object')){
            obj1[key] = deepMerge(obj1[key], obj2[key]);
        }
        else{
            obj1[key] = obj2[key];
            
            
        }
    }
    }


    return obj1;
}

function deepMerge2(obj1: Object, obj2: Object): Object {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
                obj1[key] = deepMerge2(obj1[key], obj2[key]);
            } else {
                if (typeof obj1[key] === typeof obj2[key]) {
                    obj1[key] = obj2[key];
                } else {
                    throw new TypeError("Provide same type argument");
                }
            }
        }
    }
    return obj1;
}





const obj1 = { a: 1, b: { c: 8 } };
const obj2 = {a:'2', b: { d: 3 }, e: 4 };

const obj3 = deepMerge(obj1,obj2); 
const obj4 = deepMerge2(obj1,obj2);

console.log(obj3); // { a: '2', b: { c: 8, d: 3 }, e: 4 }
console.log(obj4);

export{};

