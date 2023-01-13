
const num = [2,4,5,7,10,13];

console.log(Math.max.apply(null,num)); 
/* 
As math.max takes direct array and not a reference we can use apply
method as The apply() method accepts arguments in an array
Since JavaScript arrays do not have a max() method we can utilise apply for the same purpose
if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. 
In "non-strict" mode, it becomes the global object.
*/
