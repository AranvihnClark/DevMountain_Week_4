// Write your solution below:

const tshirtSorter = str => {
    // In case if we somehow get capital letters, we will lowercase the string.
    // Also helps to make it easier to evaluate the string since we aren't worried about how we return the sorted string.
    str = str.toLowerCase();

    // Since the instructions specifically indicated that the function will only take in a string of tshirt sizes, we need to make sure that's true.
    // We keep track of that with a boolean variable. Default to true becauase we expect the string to be correct.
    let isTrue = true;

    // We run a for loop to check is the string has any characters that aren't `s`, `m`, or `l`. If so, "isTrue" will be `false`.
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== `s`){
            if(str[i] !== `m`) {
                if(str[i] !== `l`)
                isTrue = false;
            }
        }
    }

    // Now we pop out of the function if the string is incorrect. Otherwise, the line below will be skipped and we will sort the string.
    if(!isTrue) return console.log(`Your string has more than tshirt sizes, or contains a space...`);

    // Create an array variable to store the sorted string-to-be.
    let arr = [];

    // Created a count variable to know where to inject the size `m`.
    let count = 0;

    // No need to create a separate line to split the string. We run a forEach loop to iterate through the now "str" array.
    str.split(``).forEach((e) => {
        
        // If "e" in the "str" array is equal to `s`, we splice it to the beginning of the array variable we created.
        // We could just unshift, but as I am using splice for the `m` I just figured why not keep it conisisten throughout the code.
        if(e === `s`) {
            arr.splice(0, 0, e);

            // We increase the "count" variable to know where to inject `m` later.
            count++

        // If "el" in "str" array is equal to `l`, we splice it to the very end by getting the length of the "str" array and subtracting it with the "count" variable we have.
        } else if(e === `l`) arr.splice((str.length-count), 0, e);

        // Then, if "e" in "str" array isn't `s` or `l`, it will splice what should be `m` after the `s` using our "count" variable as the starting point.
        else arr.splice(count, 0, e);
    })
    return console.log(arr.join(``));

    // While we could just ".split(``).sort().reverse().join(``)", it doesn't account for instead of the loop, I felt it wasn't as robust as the above.
    // If we need to change the code in the future to adjust for other options or requirements, I'd be able to reuse my code easily.

}

tshirtSorter(`lms`);
tshirtSorter(`smllms`);