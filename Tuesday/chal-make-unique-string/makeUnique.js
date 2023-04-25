// Write your solution below:

// What I originally made. I've always liked doing two for loops as it is easy to read and difficult to mess up.
/*
const makeUnique = str => {
    // First we need to make an array to easily remove duplice letters.
    let arr = str.split(``);

    // We use two for loops to evaluate two items in the array to each other.
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // Variable "i" becomes our unique value as it is the first value and it is compared against anything after variable "j", which is the testing value.
            if(arr[i] === arr[j]) {

                // If the letter at index "j" is the same as index "i", we splice out the letter and return "j" to its previous index value due to the change in the array length.
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return console.log(arr.join(``));
}
*/

// "Set" creates a new object (called "Set" of course) that looks for and stores only unique values of any type.
// Using the spread "..." syntax, we can properly evaluate every value of "str.split(``)" with "Set" without creating a "Set" object and keeping it a split string.
// The spread "..." syntax seems to default the output as a string whether an array or string is provided.
// As such, we encase the entire code in "[]" to turn the split string into an array so that we may "join" them together.
// Then we can log them properly as a whole string.
const makeUnique = str => console.log([...new Set(str.split(``))].join(``));

makeUnique('helloworld');
makeUnique('iwanttoclimbamountain');