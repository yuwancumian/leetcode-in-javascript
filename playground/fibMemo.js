function fib(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
}
const a = fib(10)
a


