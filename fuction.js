
// numta try a function and loop

function numta (nums){
    var gonon=[];
    for (var i = 0; i <= 10; i++){
        var total=nums + " X "+ i + " = " + i * nums;
        gonon.push(total);
       
    }
    return gonon;
}
console.log(numta(12));


// function numta (gonon){
//     var nums = gonon*13;
//     return nums;
// }
// console.log(numta(1));
// console.log(numta(2));
// console.log(numta(3));
// console.log(numta(4));
// console.log(numta(5));
// console.log(numta(6));
// console.log(numta(7));
// console.log(numta(8));
// console.log(numta(9));
// console.log(numta(10));


// var gonon=[1,2,3,4,5,6,7,8.9,10];

// for (var i = 0; i < gonon.length; i++){
//     var nums=gonon[i]*13;
//    console.log(nums);
// }