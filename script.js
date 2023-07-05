let obj1 = {
    num: "Daler",
    num2: 330011590,
    num3: {
        main : "Footbal Player"
    },
    num4: true
};

let obj2 = {
    num5: "Jurakulov",
    num6: 910329550,
    num7: {
        main: "Fan Madrid"
    },
    num8: false
};

//   link 
let newObj = {
    ...obj1,
    ...obj2
};
let nums = Object.keys(newObj);

let values = Object.values(newObj);

let arr = [...nums, ...values];

let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
};

arr.forEach(item => {

    if (typeof item === "string") {
        types.string.push(item);
    } else if (typeof item === "number") {
        types.number.push(item);
    } else if (typeof item === "object") {
        types.object.push(item);
    } else if (typeof item === "boolean") {
        types.boolean.push(item);
    }
});

console.log(types);
