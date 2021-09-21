// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const noTerms = prompt('Enter the number of terms: ');

if(noTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < noTerms; i++) {
        console.log(fibonacci(i));
    }
}