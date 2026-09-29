// var it can be rewrite

// var a = 10;
// var a = 20;
// console.log(a);


//  let and const cannot be rewrite

// let
// let a = 10;
// let a = 20;
// console.log(a);

// const

// const a = 10;
// const a = 20;
// console.log(a);

// 2nd variation
//  var a = 10;
//  console.log("after",a);

//  a= 20
//   console.log("before",a);


// let
// let a = 10;
//  console.log("after",a);

//  a= 20
//   console.log("before",a);
 
// const
// const a = 10;
//  console.log("after",a);

//  a= 20
//   console.log("before",a);

// 3rd 
// var x;
// console.log("var = ",x);

// let
// var a;
// console.log("let = ",a);


// const
// const a;
// console.log("const = ",a);

//  4th variation
// function varEx(){
//     if(true){
//         var n=10;
//         console.log("var n inside if :",n);
        
//     }
//     console.log("var n outside if :",n);
// }
// varEx()

// let
// function letEx(){
//     if(true){
//         let n=10;
//         console.log("let n inside if :",n);
        
//     }
//     console.log("let n outside if :",n);
// }
// letEx()

// const
function constEx(){
    if(true){
        const n=10;
        console.log("const n inside if :",n);
        
    }
    console.log("const n outside if :",n);
}
constEx()