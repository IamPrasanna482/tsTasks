/*

Create a utils type DefinedProperties that takes object and make every property to be also defined (remove null or undefined from the value type)

Challenge one -> Single level object type
Challenge two -> Nested object type

interface User {
age?: number;
name: string | null;
}

type DefineExample = DefinedProperties<Example>;
Should infer DefineExample as { age: number; name: string; }

*/


// create an interface User
interface User {
    age : number,
    name? : string,
    gender : string,
    pincode : number | null,
    city? : string,
    state : string | null,
    mNum? : number
}

// create a u1 from UserInterface, provide null or undefined values
const u1:User = {
    age : 22,
    gender : "Male",
    pincode : null,
    state : "UP"
}

const k1 = typeof u1;



//  use NonNullable to remove null or undefine from each property value
type DefinedProperties<T> = { [K in keyof T]-?: NonNullable<T[K]>};
  


// here, providing any null or undefine value will cause an error
const u2 : DefinedProperties<User> = {
    age : 22,
    gender : "Male",
    pincode : 201002,
    state : "UP",
    name : "prasanna",
    city : "GZB",
    mNum : 8920481981,
}

type k = typeof u2;
