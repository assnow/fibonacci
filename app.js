'use strict';
const memo = new Map();
memo.set(0, 0);
momo.set(1, 1);

function fib(n){
    if (memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}

const length = 100;
for (let i = 0; i < length; i++){
    console.log(fib(i));
}
