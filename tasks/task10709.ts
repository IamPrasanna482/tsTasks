/*
Create a utils type NullabelProperties that takes object and make every property to be also null

Challenge one -> Single level object type
Challenge two -> Nested object type

interface User {
    age: number;
    name: string;
}

type NullableExample = NullabelProperties<Example>;
Should infer NullableExample as { age: number|null ; name: string|null; }

*/

export{}

// interface for User, task is to add null datatype to all keys
interface User{
    age : number,
    name : string,
    gender : string,
    pincode : number,
    city : string,
    state : string,
    mNum : number,
}


// u1 object
const u1:User = {
    age : 22,
    name : "prasanna",
    gender : "Male",
    pincode : 201002,
    city : "GZB",
    state : "UP",
    mNum : 8920481981
}

type t1 = typeof u1;


// NullableProperties utils to add null to every key of the object
type NullableProperties<T> = { [Key in keyof T]: NullableProperties<T[Key]> | null };


// now we can add null to the values also
const u2:NullableProperties<User> = {
    age : null,
    name :  "prasoon",
    gender : null,
    pincode : 23431,
    city : null,
    state : "MP",
    mNum : null
}

type t2 = typeof u2;
/*
type t2 = {
    age: number | null;
    name: string | null;
    gender: string | null;
    pincode: number | null;
    city: string | null;
    state: string | null;
    mNum: number | null;
}
*/



export{};


// challenge 2 => for nested object
