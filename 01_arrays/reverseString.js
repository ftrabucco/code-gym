array = ['a', 'b', 'c', 'd', 'f'];
string = 'Hi my name is Fran';

function reverseArray(array){
    const reversedArray = []
    for (let i = 0; i < array.length ; i++) {
        lastCharIndex = (array.length - 1 ) - i;
        reversedArray[i] = array[lastCharIndex];
    }
    return reversedArray;
}

function reverseString(str) {
    let reversedString = '';
    let reversedArray = [];
    for (let i = 0; i < str.length; i++) {
        let lastCharIndex = (str.length - 1) - i;
        reversedArray[i] = str[lastCharIndex];
        reversedString = reversedString + reversedArray[i];
    }
    return reversedString;
}

function reverseString2(str){
    //check input
    if (!str || str.length < 2 || typeof str !== 'string' ){
        return 'the input is not valid'
    }
    const backwards=[];
    const totalItems=str.length - 1;
    for (let i = totalItems; i>=0; i--) {
        backwards.push(str[i]);
    }
   return backwards.join('');
}

function reverseString3(str){
    return str.split('').reverse().join('');
}

const reverseString4 = str => str.split('').reverse().join('');


console.log(reverseArray(array));
console.log(reverseString(string));
console.log(reverseString2(string));
console.log(reverseString3(string));
console.log(reverseString4(string));