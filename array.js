array = ['a', 'b', 'c', 'd', 'f'];
string = 'Hi my name is Fran';

function reverseString(str) {
    let reversedString = '';
    let reversedArray = [];
    for (let i = 0; i < str.length; i++) {
        lastCharIndex = (str.length - 1) - i;
        reversedArray[i] = str[lastCharIndex];
        reversedString = reversedString + reversedArray[i];
    }
    console.log(reversedString);
}

function reverseArray(array){
    let reversedArray = []
    for (let i = 0; i < array.length ; i++) {
        lastCharIndex = (array.length - 1 ) - i;
        reversedArray[i] = array[lastCharIndex];
    }
    console.log(reversedArray);
}

reverseString(string);
reverseArray(array);