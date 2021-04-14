// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    const names = arr.map(element => element.name)
    return names;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungryArr = arr.map(element => {
        return {
            name: element.name,
            isHungry: true,
            type: element.type
        }
    });
    return hungryArr;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {  
    arr.map(item => item.name = item.name.toUpperCase());
    return arr;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    return [];
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return [];
}