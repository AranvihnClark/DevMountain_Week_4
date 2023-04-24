// Write your code below this line
const shiftFunction = (str) => {
    // `+` turns the string into a number.
    // `str.charAt(0)` takes the character at index 0 and stores it into our variable.
    let shiftValue = +str[0];
    
    // We lowecase everything since it is easier to work and the instructions didn't mention we needed to account for capital letters.
    // We also slice the first value of the string as we don't need the number anymore.
    str = str.toLowerCase().slice(1);

    // We run a for loop to got through every value. Did it like this instead of a forEach method as I felt it was easier.
    for(let i = 0; i < str.length; i++) {
        // This takes the char UTF-16 value (a number) at index [i] of our string and adds the shiftValue we took out previously.
        let decodeValue = str[i].charCodeAt() + shiftValue;

        // This checks to make sure that once we pass `z`, or UTF-16 value `122`, we loop back to the beginning of the letters; aka UTF-16 value `97` by subtracting the decodeValue by 26.
        if(decodeValue > 122) decodeValue -= 26;

        // Then we swap in the char in the string at index [i] with the new UTF-16 value and return it into a letter using `String.fromCharCode()`. We use the String
        str[i] = String.fromCharCode(decodeValue);
    }
    return console.log(str);
}

shiftFunction(`1a`);
shiftFunction(`3ce`);
shiftFunction(`2fcjjm`);
shiftFunction(`3xyzabc`);