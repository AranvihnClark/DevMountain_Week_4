// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:
// `(` = 40 & `)` = 41
const has_balanced_parens = str => {

    // Second attempt via .split and .length (didn't know it could be applied this way).
    // Essentially, we are separating the string based on "(" into an array, counting how many there are with ".length", and then doing the same with ")". Then subtract them together.
    // If we were trying to count and return the number of each parantheses, I would subtract 1 from each side and store them into a variable first. But since we don't need to, this expression is more than enough to arrive at the same answer.
    let count = (str.split(`(`).length) - (str.split(`)`).length);
    
    // We then check if the value is 0 or not with the if statement.
    if(!count) return console.log(true);
    else return console.log(false);
    

    // First attempt via for loop
    /*
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) === 40) count++;
        if(str.charCodeAt(i) === 41) count--;
    }
    if(!count) return console.log(true);
    else return console.log(false);
    */
}

has_balanced_parens(sample1);
has_balanced_parens(sample2);
has_balanced_parens(sample3);
has_balanced_parens(sample4);
has_balanced_parens("()");
has_balanced_parens("(Oh Noes!)(");
has_balanced_parens("((There's a bonus open paren here.)");
has_balanced_parens(")");
has_balanced_parens("(");
has_balanced_parens("(This has (too many closes.) ) )");
has_balanced_parens("Hey...there are no parens here!")