# Hoisting answers

1. The output is 7, since the `test` variable was initialized at the top of
   the scope, it was ready to be used within all the scope. Besides that, the
   `if` branch'd never be executed.
2. The output is 6, because the `one` function was hoisted up to even before the
   `test` variable initialization, so it was available to be used within the
   `else` branch.
3. The output is 1, because the `one` function calls itself recursively, within
   its own closure, until it reaches an integer lower than 2, thus, being it 1.
4. We get an error, since we tried to call a function which had not been yet
   initialized, only hoisted. We can solve it by moving the function
   initialization before the call.


# Day 2 answers

The problem with that code is that all the functions will hold a reference to the same `i` variable, and since its final value is `10`, all of them print 10. Here's the fix:

````javascript
var myTimeout = function(n) {
  setTimeout(function() {
    console.log(n);
  }, 1000);
};

for(i = 0; i < 10; i++) {
  myTimeout(i);
}
````
