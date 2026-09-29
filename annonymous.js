// Annonymous function without input and withuot retuen
// let sayhello= function(){
//     console.log("hello Annonymous");
    
// }
// sayhello()

// let smallest = function(){
//     n1 =20;
//     n2= 10;
//     n3 =3;
//     if(n1<n2&&n1<n3){
//         console.log(n1);
        
//     }else if(n2<n1&&n2<n3){
//         console.log(n2)
//     }
//     else{
//         console.log(n3)
//     }
// }
// smallest()

// function with input and without return
// let displaynumber = function(name){
//     console.log("my name is"+name);
    
// }
// displaynumber("kavya")


// let palindrom= function (n){
//     let original = n;
//     let result =0;
//     while(n>0){
//         let digit = n%10;
//         result=result*10+digit;
//         n=parseInt(n/10);
//     }
//     if(original == result){
//         console.log("palindrome");
        
//     }
//     else{
//         console.log("Not a palindrome")
    
//     }
// }
// palindrome(1331)


// function without input and with return

    // let year =2022
    // if(year%4==0){
    //     console.log(year,"it is a leap year");
        
    // }
    // else if(year%==400){
    //     console.log(year,"is a leap year")
    // }
    // else if(year%100!=0){
    //     console.log(year,"is not a leap year")
    // }
    // else{
    //     console.log("not a leap year")
    // }
// perfect number
// let sum=0
// let n =16
// for (i=1;i<=n;i++);
// if(n%i==0){
//     sum=sum+i
// }
// if(sum==n){
//     console.log(n ,"is perfect number");
    
// }
// else{
//     console.log(n,"not a perfect number")
// }
//  Arrow function without input and without return
// let sayhello=()=>{
//     console.log("Arrow function :Hello");
    
// };
// sayhello()
// let even=()=>{
//     for(i=1;i<=10;i++){
//         if(i%2==0){
//             console.log(i);
            
//         }
//     }
// }
// even()

// with input and without return

// let displayname = ()=>{
//     return"hero";
// }
// let displayname = () =>"hello";
// console.log(displayname());
// Arrow function with input and with return
// let displayname=name=>name
// console.log(displayname("hero"));
// check even or odd
let evenodd=n=>{
    if(n%2==0){
        return n+"even";
    }else{
        return n+"odd"
    }
};
console.log(n);
evenodd(8)
