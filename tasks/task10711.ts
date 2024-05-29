/*

Function that will take first parameter a object and second one a object with new properties name to be updated. When it typing the second argument it should give suggestion.

const user = {
    firstName: "Tony";
    lastName: "Stark";
    age: 54;
}

const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })
Should give return type as

{
    first: string;
    last: string;
    age: number;
}

*/

export{}


function transformKeys<T extends Record<string, any>, U extends Record<string, any>>(obj1: T, obj2: U): Record<string,any> {
    
    const Obj: Record<string,any> = {} ;

    for (const key in obj1) {

        // hasOwnProperty to confirm that the keys are of the object only and not inherited from other objects
        if (obj1.hasOwnProperty(key)) {
            const newKey = obj2[key];
            Obj[newKey] = obj1[key];
        }
    }
    return Obj ;
}

type User = {
    firstName : string,
    lastName : string,
    age : number
}

const user:User = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
};


const transformedUser = transformKeys(user, { firstName: 'first', 
                                              lastName: 'last',
                                              age : 'BirthAge'});


console.log(transformedUser);
