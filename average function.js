//  function average(){
//     const arr = [11, 22, 33, 44, 55, 66, 77];
//     var sum = 0;
//     for (var number of arr) {
//        sum += number;
//     }
//     average = sum / arr.length;
//     return average;
//  }
//  console.log(average());



// function average (){
//     let arr =[11, 22, 33, 44, 55, 66, 77];
//     var sum =0;
//     for (var i = 0; i < arr.length; i++){
//         sum += arr[i] ;
//     }
//     var average = sum / arr.length;
//     return average;
// }
// console.log(average());


function average(){
    var number = [11, 22, 33, 44, 55, 66, 77];
    var sum =0;
    for ( var i = 0; i<number.length;i++){
        sum += number[i];
    }
    let average = sum /number.length;
    return average;
}
console.log(average());