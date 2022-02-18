// var number = 7;

// if(number<=5){
//     console.log ( number+'Number is in the input')
// }
// else{
//     console.log(number+'Number is not in the input')
// }

// function findMissingNo(a,n)
// const total = Math.floor((n+1)*(n+2)/2);
// for(let i=0; i<n; i++){
//     total -= a[i];
//     return total;
// }
// let arr= [1,2,4,5];
// let n= arr.length;
// console.log(findMissingNo([1,2,4,5]));
////////////Fibonacci Series/////////////////////
// var num = 7;
// let n1=0, n2=1, sum;
// // console.log('Fibonacci Series:');
// for(let i=1; i<=num; i++){
//     // console.log(n1);
//     sum=n1+n2
//     n1=n2
//     n2=sum
// }
// console.log( sum);
////////////////////////////////////////////////
//Generate an Array of All Object Keys with Object.keys()
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    
    return Object.keys(obj);
    
  }
  
  console.log(getArrayOfUsers(users));
