// Drivers method 
//Find minimum number of coins that make a given value


    function minCoins(coins, m, V) {
      
    if (V == 0)
        return 0;
    
    
    let res = Number.MAX_VALUE;
    
    for(let i = 0; i < m; i++)
    {
        if (coins[i] <= V)
        {
            let sub_res = minCoins(coins, m,
                               V - coins[i]);
            
            
            if (sub_res != Number.MAX_VALUE && 
                sub_res + 1 < res)
                res = sub_res + 1;
        }
    }
    return res;
}


let coins = [ 9, 6, 5, 1 ];
let m = coins.length;
let V = 11;

console.log("Minimum coins required is " +
               minCoins(coins, m, V) );
