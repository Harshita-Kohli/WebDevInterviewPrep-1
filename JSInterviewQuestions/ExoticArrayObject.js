var arr=[];
arr[null]="foo";
console.log(arr.length);//0
console.log(arr.null);//foo
console.log(arr[null]);//foo
arr[5]="meow";  
console.log(arr.length);
console.log(arr);
