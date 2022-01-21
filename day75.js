//Finding factorial of given number

function factorial(n)
{
    var res = 1 ;
    for (let i = 2; i <= n; i++)
        res *= i;
    return res;
}

//Driver method

    var num = factorial(7);
    console.log( num );
    //console.log(num);
